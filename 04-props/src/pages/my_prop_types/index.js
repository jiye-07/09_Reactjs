import React from "react";

import Meta from "../../components/Meta";
import MyPropTypesSub from "./MyPropTypesSub";

const MyPropTypes = () => {
  return (
    <div>
      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js 에서의 설정을 덮어쓰게 된다. */}
      <Meta titel="MyPropTypes.js" description="여기는 MyPropTypes.js 파일 입니다" />

      <h2>MyPropTypes</h2>

      <MyPropTypesSub />
      <MyPropTypesSub name="민호" age="19" hobby="사진찍기" />
      <MyPropTypesSub name="수영" age="스물한살" hobby="영화보기" />
      <MyPropTypesSub name="민호" age={22} />
    </div>
  );
};

export default MyPropTypes;
