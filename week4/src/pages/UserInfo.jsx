import React from "react";
import { useRecoilState } from "recoil";
import useGetUserInfo from "../api/useGetUserInfo";
import { userNameState } from "../components/Finder";

import Finder from "../components/Finder";

export default function UserInfo() {
  const userName = useRecoilState(userNameState)[0];
  const userInfo = useGetUserInfo(userName);
  console.log(userName);

  return (
    <>
      <Finder />
      <p>{userInfo?.bio}</p>
    </>
  );
}
