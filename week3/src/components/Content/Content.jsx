import React from "react";

import Provider from "./Provider";
import Score from "./Score";
import Image from "./Image";
import Again from "./Again";

export default function Content() {
  return (
    <>
      <Provider>
        <Score />
        <Image />
      </Provider>
      <Again />
    </>
  );
}
