import React, { useContext } from "react";
import styled from "styled-components";

import { scoreContext } from "./Provider";

export default function Score() {
  const [score] = useContext(scoreContext);

  return <ScoreText>{score}점</ScoreText>;
}

const ScoreText = styled.h2`
  background-color: black;
  padding: 10px 0;
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
