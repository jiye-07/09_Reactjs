import React from "react";

import Meta from "../../components/Meta";
import MyPropsSub from "./MyPropsSub";

// 직접 정의한 컴포넌트 참조

const MyProps = () => {
  return (
    <div>
      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js 에서의 설정을 덮어쓰게 된다. */}
      <Meta titel="MyProps.js" description="여기는 MyProps.js 파일 입니다" />

      <h2>MyProps</h2>

      <MyPropsSub />
      <MyPropsSub name="민호" age="19" />
      <MyPropsSub name="수영" age={20} />
    </div>
  );
};

export default MyProps;
