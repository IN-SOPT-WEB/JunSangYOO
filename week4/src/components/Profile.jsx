import React from "react";
import styled from "styled-components";

import Container from "./Container";

export default function Profile({ userInfo }) {
  return (
    <Container>
      <ProfileImg src={userInfo.avatar_url} />
      <UserNickName>{userInfo.login}</UserNickName>
      <UserName>{userInfo.name}</UserName>
      <UserProfileLink href={userInfo.html_url}>
        Visit {userInfo.login}
      </UserProfileLink>
      <InfoBox>
        <Info>
          <InfoTitle>Followers</InfoTitle>
          <InfoNum>{userInfo.followers}</InfoNum>
        </Info>
        <Info>
          <InfoTitle>Followings</InfoTitle>
          <InfoNum>{userInfo.following}</InfoNum>
        </Info>
        <Info>
          <InfoTitle>Repos</InfoTitle>
          <InfoNum>{userInfo.public_repos}</InfoNum>
        </Info>
      </InfoBox>
    </Container>
  );
}

const ProfileImg = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const UserNickName = styled.h2``;

const UserName = styled.h3``;

const UserProfileLink = styled.a`
  text-decoration: none;
  display: block;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  padding: 10px 0;
  width: 200px;
  margin: 0 auto;
`;

const InfoBox = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

const Info = styled.article`
  width: 100px;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px 15px;
`;

const InfoTitle = styled.p``;

const InfoNum = styled.p``;
