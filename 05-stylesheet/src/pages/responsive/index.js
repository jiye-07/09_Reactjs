import React from "react";

import Meta from "../../components/Meta";

const Responsive = () => {
  return (
    <div>
      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js 에서의 설정을 덮어쓰게 된다. */}
      <Meta titel="Responsive.js" description="여기는 Responsive.js 파일 입니다" />

      <h2>Responsive</h2>
    </div>
  );
};

export default Responsive;
