import React from "react";
import styled from "styled-components";

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

const ContainerBox = styled.article`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px 0;
  width: 60%;
  margin: 0 auto;
`;
