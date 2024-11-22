import React from "react";
import styled from "styled-components";
import FakeImg from "../../components/FakeImg";
import mq from "../../components/MediaQuery";

// 컨테이너
const PostContainer = styled.div`
  flex: 1;
`;

const PostItem = styled.section`
  flex: 0 1 auto;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;

  ${mq.maxWidth("sm")`
                flex: none;
                width: 100%;
            `}

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
`;

const Post = () => {
  return (
    <PostContainer>
      {[1, 2, 3, 4, 5].map((v, i) => {
        return (
          <PostItem key={i}>
            <h2>안녕하세요</h2>
            <h3>오늘은 날이 춥습니다</h3>
            <FakeImg height={200}>Image</FakeImg>
            <p>다른이야기는..</p>
            <p>곧 점심시간이여서 배가 고픈데 고프지 않은 느낌입니다.. 밥을 맛있게 먹고 싶지만 배가 고픈데 안고파요</p>
            <br />
          </PostItem>
        );
      })}
    </PostContainer>
  );
};

export default Post;
