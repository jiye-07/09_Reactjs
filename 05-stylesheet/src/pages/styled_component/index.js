import React from "react";
import styled, { css } from "styled-components";

// 컴포넌트 코드 안에서 SCSS 문법을 적용한 컴포넌트를 직접 정의
// 패키지 설치가 필요함.
// * yarn add styled-components
// *
// * VSCode에서 styled-components 지원을 위한 확장프로그램
// * vscode-styled-components

/** ul 태그로 구성된 컴포넌트 정의 -> styled. 태그이름'' ; (역따옴표 주의) */
const MyGridContainer = styled.ul`
  /* SCSS 코딩 진행 */
  list-style: none;
  padding: 0;
  margin: 0;
  width: 1024px;
  border: 5px solid #cc0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/** li 태그로 구성된 컴포넌트 정의 */
const MyGridItem = styled.li`
  /* width: 33%; */

  /* JSX로부터 전달받은 변수들을 props라는 이름의 객체 형태로 주입받는 콜백함수를 정의한다.
   * 이 콜백함수에서 리턴하는 값이 이 위치에 적용된다.
   */
  width: ${(props) => props.width};
`;

/** div 태그로 구성된 컴포넌트 정의 */
const MyBox = styled.div`
  border: 3px dotted #000;
  background-color: #eee;
  height: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  /* 색상값이 전달된 경우 해당값 사용, 그렇지 않은 경우 "black" 을 기본값으로 사용 */
  color: ${(props) => props.$color || "black"};

  &:hover {
    transform: scale(1.05, 1.05) rotate(-10deg);
    background-color: #eeeeee;
    color: #fff;
  }

  /** props 값에 대한 조건절 처리 */
  ${(props) =>
    props.$number % 2 === 1 &&
    css`
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    `}
`;

const StyledComponent = () => {
  // 색상이나 색상코드에 대한 배열
  const myColors = ["red", "green", "purple", "yellow", "pink"];

  // 배열 전체를 100으로 봤을때 하나당 몇 % 인지 계산
  const myWidth = 100 / myColors.length + "%";

  return (
    <div>
      <h1>StyledComponent</h1>

      <h3>단순 태그처럼 사용</h3>
      <MyGridContainer>
        <MyGridItem width={"30%"}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
        <MyGridItem width={"10%"}>
          <MyBox>Item2</MyBox>
        </MyGridItem>
        <MyGridItem width={"20%"}>
          <MyBox>Item3</MyBox>
        </MyGridItem>
        <MyGridItem width={"15%"}>
          <MyBox>Item4</MyBox>
        </MyGridItem>
        <MyGridItem width={"25%"}>
          <MyBox>Item5</MyBox>
        </MyGridItem>
      </MyGridContainer>

      <h3>배열 원소를 활용한 컴포넌트 사용</h3>
      <MyGridContainer>
        {myColors.map((item, index) => {
          return (
            <MyGridItem key={index} width={myWidth}>
              <MyBox $color={item} $number={index}>
                {item}
              </MyBox>
            </MyGridItem>
          );
        })}
      </MyGridContainer>
    </div>
  );
};

export default StyledComponent;
