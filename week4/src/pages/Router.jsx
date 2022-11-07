import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./Search";
import UserInfo from "./UserInfo";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/search/:userId" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
