import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUserAPI } from "../api/userAPI";

import Container from "./Container";
import CloseButton from "./CloseButton";

export default function Finder() {
  const navigate = useNavigate();

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const onDeleteHistory = (e) => {
    setHistory((prev) =>
      prev.filter(
        (item) => item !== e.target.parentNode.textContent.slice(0, -1)
      )
    );
  };

  const onSearchUser = async (e) => {
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
          userInfo: await getUserAPI(e.target.value),
        },
      });
    }
  };

  const onClickSearchHistory = async (e) => {
    navigate(`/search/${e.target.textContent.slice(0, -1)}`, {
      state: {
        userInfo: await getUserAPI(e.target.textContent.slice(0, -1)),
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
`;
