import React, { memo, useState, useCallback } from "react";

import styled from "styled-components";

const MyCallbackContainer = styled.div``;

const MyCallback = memo(() => {
  const [myText, setMytext] = useState("Hello React");

  console.log("MyCallback 함수가 실행됨~!!");

  //
  //
  //
  const onInputChange = useCallback((e) => {
    setMytext(e.currentTarget.value);
  }, []);

  return (
    <MyCallbackContainer>
      <h2>MyCallback</h2>
      <h2>{myText}</h2>

      <input type="text" placeholder="input ..." onChange={onInputChange} />
    </MyCallbackContainer>
  );
});

export default MyCallback;
