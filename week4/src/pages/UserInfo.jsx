import React from "react";
import { useLocation } from "react-router-dom";

import Finder from "../components/Finder";
import Profile from "../components/Profile";

export default function UserInfo() {
  const location = useLocation();
  return (
    <>
      <Finder />
      <Profile userInfo={location.state.userInfo} />
    </>
  );
}
