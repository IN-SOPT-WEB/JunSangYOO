import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Container from "./Container";
import { getUserAPI } from "../api/userAPI";

export default function Finder() {
  const navigate = useNavigate();
  // mutate 구현하기
  const onSearchUser = async (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${e.target.value}`, {
        state: {
          login: await getUserAPI(e.target.value),
        },
      });
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
