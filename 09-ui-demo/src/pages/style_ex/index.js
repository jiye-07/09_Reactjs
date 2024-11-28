import React, { memo, useRef } from "react";
import styled from "styled-components";

const StyleExContainer = styled.div`
  .box1 {
    border: 10px solid black;
    margin: 10px auto;
    padding: 30px;
    text-align: center;
    width: auto;
  }

  .box2 {
    border: 10px dotted red;
    margin: 10px auto;
    padding: 50px;
    text-align: left;
    width: 50%;
  }

  .btn {
    margin: 0 5px;
  }
`;

const StyleEx = memo(() => {
  // <Box>를 제어하기 위한 참조변수
  const myBox = useRef();

  return (
    <StyleExContainer>
      <h2>StyleEx</h2>

      <div className="box1" id="myBox" ref={myBox}>
        <h1>Hello React</h1>
      </div>

      <input
        type="button"
        value="(폰트) orange"
        className="btn"
        onClick={(e) => {
          // document.querySelector("#myBox").style.color = "#f60";
          myBox.current.style.color = "#f60";
        }}
      />

      <input
        type="button"
        value="(폰트) sky"
        className="btn"
        onClick={(e) => {
          // setProperty 메서드를 사용하여 CSS 속성 설정하기
          myBox.current.style.setProperty("color", "#06f");
        }}
      />

      <input
        type="button"
        value="(배경) yellow"
        className="btn"
        onClick={(e) => {
          // 직접 CSS 속성을 설정할 경우 Javascript property명으로 접근해야 한다.
          myBox.current.style.backgroundColor = "#ff0";
        }}
      />

      <input
        type="button"
        value="(배경) pink"
        className="btn"
        onClick={(e) => {
          // setProperty 메서드를 사용할 경우 원래의 CSS 속성명을 사용할 수 있다.
          myBox.current.style.setProperty("background-color", "#f0f");
        }}
      />

      <input
        type="button"
        value="box1 클래스 적용"
        className="btn"
        onClick={(e) => {
          myBox.current.classList.add("box1");
          myBox.current.classList.remove("box2");
        }}
      />

      <input
        type="button"
        value="box2 클래스 적용"
        className="btn"
        onClick={(e) => {
          myBox.current.classList.add("box2");
          myBox.current.classList.remove("box1");
        }}
      />
    </StyleExContainer>
  );
});

export default StyleEx;
