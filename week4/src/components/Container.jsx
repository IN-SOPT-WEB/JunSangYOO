import React from "react";
import styled from "styled-components";

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

const ContainerBox = styled.article`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px 50px;
  width: 60%;
  margin: 30px auto;
  text-align: center;
  color: white;
  box-sizing: border-box;
  font-weight: 600;
`;
