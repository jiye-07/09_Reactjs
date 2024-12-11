import React, { memo } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";

import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";

const GraphBoardContainer = styled.div`
  margin: 20px -10px;
  display: flex;
  flex-wrap: wrap;
`;

const GraphBoard = memo(() => {
  // 기본 데이터 처리
  // 백엔드로부터의 결과값만 필요하므로 나머지는 선언하지 않음
  const { item } = useSelector((state) => state.TitanicSlice);

  return (
    <GraphBoardContainer>
      <Graph1 />
      <Graph2 />
      <Graph3 />
      <Graph4 />

      {/* 데이터를 잘 가져왔는지 확인 (임시) */}
      {/* {item && <p> {JSON.stringify(item)} </p>} */}
    </GraphBoardContainer>
  );
});

export default GraphBoard;
