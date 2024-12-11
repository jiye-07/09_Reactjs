import React, { memo } from "react";

import styled from "styled-components";

import { useSelector } from "react-redux";

const Graph2Container = styled.div`
  background-color: #5cb3ff55;
  flex: 1 0 50%;

  .container {
    background-color: #5cb3ff77;
    margin: 10px;
    height: 50px;
  }
`;

const Graph2 = memo(() => {
  // 기본 데이터 처리
  const { item } = useSelector((state) => state.TitanicSlice);
  return (
    <Graph2Container>
      <div className="container"></div>
    </Graph2Container>
  );
});

export default Graph2;
