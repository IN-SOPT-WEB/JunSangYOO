import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { v1 } from "uuid";

import Container from "./Container";
import CloseButton from "./CloseButton";

const historyState = atom({
  key: `historyState${v1()}`,
  default: JSON.parse(localStorage.getItem("history") || "[]"),
});

export default function Finder() {
  const navigate = useNavigate();
  const [history, setHistory] = useRecoilState(historyState);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  console.log(history);

  const onDeleteHistory = useCallback(
    (e) => {
      e.stopPropagation();
      setHistory((prev) =>
        prev.filter(
          (item) => item !== e.target.parentNode.textContent.slice(0, -1)
        )
      );
    },
    [setHistory]
  );

  const onSearchUser = (e) => {
    if (e.key === "Enter") {
      setHistory((prev) => {
        if (prev.indexOf(e.target.value) === -1) {
          return [...prev, e.target.value];
        } else {
          return prev;
        }
      });
      navigate(`/search/${e.target.value}`, {
        state: {
          name: e.target.value,
        },
      });
    }
  };

  const onClickSearchHistory = (e) => {
    navigate(`/search/${e.target.textContent.slice(0, -1)}`, {
      state: {
        name: e.target.textContent.slice(0, -1),
      },
    });
  };

  return (
    <Container>
      <FinderTitle>Github Profile Finder</FinderTitle>
      <FinderInput onKeyDown={onSearchUser} />
      <HistoryBox>
        {history.map((item) => (
          <HistoryEl key={item} onClick={onClickSearchHistory}>
            {item}
            <CloseButton onClick={onDeleteHistory} />
          </HistoryEl>
        ))}
      </HistoryBox>
    </Container>
  );
}

const FinderTitle = styled.h1`
  text-align: center;
  color: white;
  font-size: 36px;
  margin-top: 10px;
`;

const FinderInput = styled.input`
  width: 200px;
  display: block;
  margin: 0 auto;
  padding: 15px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
`;

const HistoryBox = styled.ul`
  list-style: none;
  padding-left: 0;
  background-color: transparent;
`;

const HistoryEl = styled.li`
  padding: 10px 20px;
  color: white;
  cursor: pointer;
`;
