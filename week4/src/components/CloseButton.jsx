import React from "react";
import styled from "styled-components";

export default function CloseButton({ onClick }) {
  return <Btn onClick={onClick}>X</Btn>;
}

const Btn = styled.button`
  border: 2px solid white;
  color: white;
  cursor: pointer;
  padding: 15px 18px;
  border-radius: 10px;
  background-color: transparent;
  margin-bottom: 20px;
`;
