import React from "react";

/**
 * props
 * -> 컴포넌트를 사용하는 부모로부터 전달받는 변수값이 포함되어 있는 객체
 * -> 필요한 경우에만 선언한다.
 * -> 흔히 컴포넌트에게 HTML 속성 같은 형태로 전달된다.
 */

const MyPropsSub = (props) => {
  console.group("MyPropsSub");
  console.log(props);
  console.log(typeof props.name);
  console.log(typeof props.age);
  console.groupEnd();

  return (
    <div>
      <h3>MyPropsSub</h3>
      <p>
        제 이름은<b>{props.name}</b>이고 나이는<b>{props.age}</b>입니다.
      </p>
    </div>
  );
};

export default MyPropsSub;
