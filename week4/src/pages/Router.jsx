import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./Search";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
