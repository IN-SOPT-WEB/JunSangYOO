import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { v1 } from "uuid";

import Container from "./Container";

export const userNameState = atom({
  key: `userNameState/${v1}`,
  default: "",
});

export default function Finder() {
  const navigate = useNavigate();
  const [, setUserName] = useRecoilState(userNameState);
  const onSearchUser = (e) => {
    if (e.key === "Enter") {
      setUserName(e.target.value);
      navigate(`/search/${e.target.value}`);
    }
  };
  return (
    <Container>
      <FinderTitle>Github Profile Finder</FinderTitle>
      <FinderInput onKeyDown={onSearchUser} />
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
