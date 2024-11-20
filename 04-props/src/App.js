import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import MyProps from "./pages/my_props";
import MyProptypes from "./pages/my_prop_types";
import MyChildren from "./pages/my_children";
import GradeTable from "./pages/grade_table";

const App = () => {
  return (
    <>
      {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시,
          이 내용이 모든 페이지에 공통 적용된다. */}
      {/* <Meta /> */}

      <h1>04-props</h1>
      <nav>
        <Link to="/myprops">MyProps</Link>&nbsp;|&nbsp;
        <Link to="/myproptypes">MyProptypes</Link>&nbsp;|&nbsp;
        <Link to="/mychildren">MyChildren</Link>&nbsp;|&nbsp;
        <Link to="/grade_table">GradeTable(demo)</Link>
      </nav>
      <hr />

      {/* Route 처리할 컴포넌트 정의 */}
      <Routes>
        <Route path="/myprops" element={<MyProps />}></Route>
        <Route path="/myproptypes" element={<MyProptypes />}></Route>
        <Route path="/mychildren" element={<MyChildren />}></Route>
        <Route path="/grade_table" element={<GradeTable />}></Route>
      </Routes>
    </>
  );
};

export default App;
