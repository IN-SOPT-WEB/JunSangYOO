import React, { createContext, useState } from "react";

import Score from "./Score";
import Image from "./Image";
import Buttons from "./Buttons";
import Again from "./Again";

export const scoreContext = createContext();

export default function Content() {
  const scoreState = useState(0);
  return (
    <scoreContext.Provider value={scoreState}>
      <Score />
      <Image />
      <Buttons />
      <Again />
    </scoreContext.Provider>
  );
}
