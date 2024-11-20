import React from "react";

import PropTypes from "prop-types";

const MyPropTypesSub = ({ name, age, hobby }) => {
  return (
    <div>
      <h3>MyPropTypesSub</h3>
      <p>
        제 이름은<b>{name}</b>이고, 나이는<b>{age}</b>입니다.
      </p>
      <p>
        {hobby && (
          <span>
            취미는 <b>{hobby}</b> 입니다.{" "}
          </span>
        )}
      </p>
    </div>
  );
};

/** 이 컴포넌트로 전달되는 props 값들에 대한 형식(DataType)과 필수 여부 지정
 *
 * 규칙에 맞지 않는 props 값에 대해 브라우저 개발자 콘솔에 Warning 메세지가 출력된다
 */
MyPropTypesSub.PropTypes = {
  // name 속성의 데이터 타입을 문자열 지정
  name: PropTypes.string,
  age: PropTypes.number,
  // hobby의 데이터 타입과 필수 여부 지정
  // --> 필수여부 설정은 데이터타입 뒤에 ".isRequired" 를 추가 명시
  hobby: PropTypes.string.isRequired,
};

export default MyPropTypesSub;
