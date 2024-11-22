import React from "react";
import styled from "styled-components";
import mq from "../../components/MediaQuery";
import Side from "./Side";
import Post from "./Post";

const MainContainer = styled.section`
  /* background-color: #6a5acd; */
  max-width: 1200px;
  margin: auto;
  background-color: #fff;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  ${mq.maxWidth("sm")`
                flex-direction: column-reverse;
            `}
`;

const Main = () => {
  return (
    <MainContainer>
      <Side />
      <Post />
    </MainContainer>
  );
};

export default Main;
