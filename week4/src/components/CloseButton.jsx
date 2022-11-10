import React from "react";
import styled from "styled-components";

export default function CloseButton({ onClick }) {
  console.log(onClick);
  return <Btn onClick={onClick}>X</Btn>;
}

const Btn = styled.button`
  border: 2px solid white;
  color: white;
  cursor: pointer;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: transparent;
  float: right;
  margin-right: -40px;
  margin-top: -10px;
`;
