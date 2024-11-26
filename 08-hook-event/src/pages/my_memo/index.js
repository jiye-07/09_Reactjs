import React, { memo, useState, useEffect, useMemo } from "react";

import styled from "styled-components";

const MyMemoContainer = styled.div``;
/**
 * 상태변수 myNumber가 변경됨에 따라 영향을 받는 새로운 상태 변수 만들기
 */
const MyMemo = memo(() => {
  // 사용자의 입력을 저장할 상태변수
  const [myNumber, setMyNumber] = useState(0);

  // 입력값에 따라 상태변수를 갱신할 이벤트 핸들러
  const onMyNumberChange = (e) => {
    const inputValue = e.currentTarget.value;
    const inputNumber = isNaN(inputValue) ? 0 : parseInt(inputValue);
    setMyNumber(inputNumber);
  };
  // [CASE 1]
  // 새로운 상태 값

  //

  //[case 2]
  //
  //
  const myResult = useMemo(() => {
    return myNumber * 234;
  }, [myNumber]);

  return (
    <MyMemoContainer>
      <h2>MyMemo</h2>
      <input type="number" value={myNumber} onChange={onMyNumberChange} /> X 234 = {myResult}
    </MyMemoContainer>
  );
});

export default MyMemo;
