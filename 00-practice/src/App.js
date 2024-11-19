// 1 ) 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조한다)
import React from "react";

// 2 ) 링크와 페이지 구성에 필요한 컴포넌트 참조
import { Link, Routes, Route } from "react-router-dom";

// 3) 링크와 페이지를 담당하는 컴포넌트(직접제작)들 참조
import Weather from "./pages/weather";
const App = () => {
  return (
    <div>
      <h1>주간날씨</h1>
      <hr />

      {/*-----링크 구성 부분 -----*/}
      <nav>
        {/*  */}
        <Link to="/weather/mon">[월]</Link>&nbsp;|&nbsp;
        <Link to="/weather/tue">[화]</Link>&nbsp;|&nbsp;
        <Link to="/weather/wed">[수]</Link>&nbsp;|&nbsp;
        <Link to="/weather/thu">[목]</Link>&nbsp;|&nbsp;
        <Link to="/weather/fri">[금]</Link>&nbsp;|&nbsp;
        <Link to="/weather/sat">[토]</Link>&nbsp;|&nbsp;
        <Link to="/weather/sun">[일]</Link>
      </nav>

      <Routes>
        <Route path="/weather/:day" element={<Weather />} exact={true} />
      </Routes>
    </div>
  );
};

export default App;
