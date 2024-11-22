import React from "react";
import styled from "styled-components";
import FakeImg from "../../components/FakeImg";
import mq from "../../components/MediaQuery";

const SideContainer = styled.div`
  box-sizing: border-box;
  width: 360px;
  flex: none;
  border-right: 1px solid #d5d5d5;
  background-color: #eeeeee;
  padding: 20px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px auto;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 10px auto;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
  }

  ${mq.maxWidth("sm")`
                width: 100%;
            `}
`;

const Side = () => {
  return (
    <SideContainer>
      <h2>사과</h2>
      <h3>당근 고구마 가지 </h3>
      <FakeImg height={"200"}>Image</FakeImg>
      <p>안녕하세요 저는 당근 입니다. 곤란한 상황이면 당근을 흔들어주세요...</p>
      <hr />
      <h2>추가 사항</h2>
      <p>오늘의 점심 메뉴는 무엇인가.. 고민된다</p>
      <FakeImg height={"60"}>Image</FakeImg>
      <br />
      <FakeImg height={"60"}>Image</FakeImg>
      <br />
      <FakeImg height={"60"}>Image</FakeImg>
    </SideContainer>
  );
};

export default Side;
