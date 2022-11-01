import React from "react";
import styled from "styled-components";

export default function Modal({ onClick, isRight }) {
  return (
    <ModalBox onClick={onClick} isRight={isRight}>
      {isRight ? "정답입니다!" : "오답입니다!"}
    </ModalBox>
  );
}

const ModalBox = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  background-color: ${(props) => (props.isRight ? "blue" : "red")};
  border-radius: 10px;
  color: white;
  text-align: center;
  line-height: 200px;
  font-size: 24px;
  font-weight: 600;
`;
