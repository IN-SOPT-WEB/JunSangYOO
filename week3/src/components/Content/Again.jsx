import React, { useCallback } from "react";
import styled from "styled-components";

export default function Again() {
  const onClickAgainButton = useCallback(() => {
    window.location.reload();
  }, []);
  return <AgainButton onClick={onClickAgainButton}>Again</AgainButton>;
}

const AgainButton = styled.button`
  background-color: black;
  padding: 10px 0;
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;
