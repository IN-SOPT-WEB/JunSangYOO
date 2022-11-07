import React from "react";
import styled from "styled-components";

import Container from "./Container";

export default function Finder() {
  return (
    <Container>
      <FinderTitle>Github Profile Finder</FinderTitle>
      <FinderInput />
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
