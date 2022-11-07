import React, { createContext, useState } from "react";

export const scoreContext = createContext();

export default function Provider({ children }) {
  const scoreState = useState(0);
  return (
    <scoreContext.Provider value={scoreState}>{children}</scoreContext.Provider>
  );
}
