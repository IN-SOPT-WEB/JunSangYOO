import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useGetTeamInfo from "../api/useGetTeamInfo";

import Container from "./Container";

export default function Team() {
  const navigate = useNavigate();
  const { data, refetch } = useGetTeamInfo();

  const onClickMemberButton = (e) => {
    if (e.target.nodeName.toLowerCase() === "button") {
      navigate(`/search/${e.target.innerText}`, {
        state: {
          name: e.target.innerText,
        },
      });
    }
    console.log(e.target);
  };
  return (
    <Container>
      <GetButton onClick={refetch}>우리팀보기!</GetButton>
      {data && (
        <TeamBox onClick={onClickMemberButton}>
          {data.name.map((item) => (
            <GetButton key={item}>{item}</GetButton>
          ))}
        </TeamBox>
      )}
    </Container>
  );
}

const GetButton = styled.button`
  border: 2px solid white;
  color: white;
  background-color: transparent;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const TeamBox = styled.section`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 30px 0;
`;
