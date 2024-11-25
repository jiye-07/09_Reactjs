import React, { memo } from "react";
import styled from "styled-components";

import FoodList from "./FoodList";
import AboutMe from "./AboutMe";

const MainContainer = styled.div`
  /* background-color: #ff660055; */

  // 상단바에 가려지는 만큼 여백 확보
  padding-top: 57px;

  // 컨텐츠 영역 넓이 제한 및 중앙 배치
  max-width: 1200px;
  margin: auto;

  .divider {
    margin: 60px 0;
    width: auto;
    border-top: 1px solid #ddd;
    border-bottom: 0;
  }
`;

const Main = memo(() => {
  return (
    <MainContainer>
      <FoodList />
      <hr className="divider" />
      <AboutMe />
    </MainContainer>
  );
});

export default Main;
