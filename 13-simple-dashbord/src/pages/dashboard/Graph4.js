import React, { memo } from "react";

import styled from "styled-components";

import { useSelector } from "react-redux";

const Graph4Container = styled.div`
  background-color: #c2e3ff55;
  flex: 1 0 50%;

  .container {
    background-color: #c2e3ff77;
    margin: 10px;
    height: 50px;
  }
`;

const Graph4 = memo(() => {
  // 기본 데이터 처리
  const { item } = useSelector((state) => state.TitanicSlice);
  return (
    <Graph4Container>
      <div className="container"></div>
    </Graph4Container>
  );
});

export default Graph4;
