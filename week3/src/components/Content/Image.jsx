import React, { useState, useContext } from "react";
import styled from "styled-components";

import ModalPortal from "../ModalPortal";
import Modal from "../Modal";

import TypeScriptImage from "../../images/typescript.png";
import JavaScriptImage from "../../images/javascript.png";
import ReduxImage from "../../images/redux.png";
import HTMLImage from "../../images/html.png";
import CSSImage from "../../images/css.png";
import { scoreContext } from "./Provider";

const imagesAry = [
  { src: TypeScriptImage, answer: "TypeScript" },
  { src: JavaScriptImage, answer: "JavaScript" },
  { src: ReduxImage, answer: "Redux" },
  { src: HTMLImage, answer: "HTML" },
  { src: CSSImage, answer: "CSS" },
];

export default function Image() {
  const [, setScore] = useContext(scoreContext);
  const [problemNum, setProblemNum] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, isRight: false });

  const onClickButton = (e) => {
    if (problemNum === imagesAry.length - 1) {
      if (e.target.innerText === imagesAry[problemNum].answer) {
        setScore((prev) => prev + 1);
        setModal((state) => ({ ...state, isOpen: true, isRight: true }));
        setIsFinish(true);
      } else {
        setModal((state) => ({ ...state, isOpen: true, isRight: false }));
      }
      return;
    }

    if (e.target.innerText === imagesAry[problemNum].answer) {
      setModal((state) => ({ ...state, isOpen: true, isRight: true }));
      setProblemNum((prev) => prev + 1);
      setScore((prev) => prev + 1);
      return;
    }

    if (e.target.innerText !== imagesAry[problemNum.answer]) {
      setModal((state) => ({ ...state, isOpen: true, isRight: false }));
    }
  };

  const onClickModal = () => {
    setModal((state) => ({ ...state, isOpen: false }));
  };

  return (
    <>
      {isFinish ? (
        <FinishScreen>끝</FinishScreen>
      ) : (
        <>
          <ImageBox src={imagesAry[problemNum].src} />
          <Buttons>
            <Button type="button" onClick={onClickButton}>
              JavaScript
            </Button>
            <Button type="button" onClick={onClickButton}>
              HTML
            </Button>
            <Button type="button" onClick={onClickButton}>
              Redux
            </Button>
            <Button type="button" onClick={onClickButton}>
              CSS
            </Button>
            <Button type="button" onClick={onClickButton}>
              TypeScript
            </Button>
          </Buttons>
        </>
      )}
      {modal.isOpen && (
        <ModalPortal>
          <Modal onClick={onClickModal} isRight={modal.isRight} />
        </ModalPortal>
      )}
    </>
  );
}

const ImageBox = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border-radius: 40px;
  padding: 50px 0;
`;

const FinishScreen = styled.article`
  height: 400px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: 400px;
  padding: 50px 0;
`;

const Buttons = styled.article`
  padding: 10px 0;
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  outline: none;
  border: none;
  background-color: black;
  border-radius: 5px;
  color: white;
  margin: 0 10px;
  cursor: pointer;
`;
