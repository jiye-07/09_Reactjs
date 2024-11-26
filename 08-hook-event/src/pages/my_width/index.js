import React, { memo } from "react";

import { useMyWidth } from "../../hooks/MyHooks";

const MyWidth = memo(() => {
  const myWidth = useMyWidth();

  return (
    <div>
      <h2>MyWidth</h2>
      <h2>windowWidth: {myWidth}</h2>
    </div>
  );
});

export default MyWidth;
