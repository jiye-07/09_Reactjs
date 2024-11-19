
// 1 ) 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조한다)
import React from 'react';

// 2 ) 링크와 페이지 구성에 필요한 컴포넌트 참조
import { Link, Routes, Route } from "react-router-dom";

// 3) 링크와 페이지를 담당하는 컴포넌트(직접제작)들 참조
import Home from './pages/home';
import About from './pages/about';
import Main from './pages/main';
import DepartmentGet from './pages/department_get';
import DepartmentPath from './pages/department_path';
import Error404 from './pages/error404';
import About1 from './pages/about/jiye';
import Weather from './pages/weather';
const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />
    
      {/*-----링크 구성 부분 -----*/}
      <nav>
          
          {/*4-1) 기본 라우팅 구성*/}
          <Link to="/">[Home]</Link> 
          <Link to="/about">[About]</Link>
          <Link to="/about/jiye">[About1]</Link> 

          {/*5-1) 서브라우팅 구성*/}
          <Link to="/main">[Main]</Link> 

          {/*6-1) GET 파라미터를 포함하는 링크 구성*/}
          <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
          <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>

          {/*7-1) PATH 파라미터를 포함하는 링크 구성*/}
          <Link to="/department_path/201/hello">[전자공학과]</Link>
          <Link to="/department_path/202/world">[기계공학과]</Link>
          
          {/* 연습문제 */}
          <Link to="/weather/1/mon">[월]</Link>&nbsp;|&nbsp;
          {/* 연습문제 */} 
          <Link to="/weather/2/tue">[화]</Link>&nbsp;|&nbsp;
          {/* 연습문제 */}
          <Link to="/weather/3/wed">[수]</Link>&nbsp;|&nbsp;
          {/* 연습문제 */}
          <Link to="/weather/4/thu">[목]</Link>&nbsp;|&nbsp;
          {/* 연습문제 */}
          <Link to="/weather/5/fri">[금]</Link>&nbsp;|&nbsp;
          {/* 연습문제 */}
          <Link to="/weather/6/sat">[토]</Link>&nbsp;|&nbsp;
          <Link to="/weather/7/sun">[일]</Link>

      </nav>

      <a href="/about">일반링크</a>

      {/*----- 페이지 역할을 할 컴포넌트를 명시하기 -----*/}

      <Routes>
        {/*4-2) 첫페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다*/}
        {/*     첫페이지로 사용되는 컴포넌트는 path에 "/" 를 권장*/}
        <Route path="/" element={<Home/>} exact={true} />
        <Route path="/about" element={<About/>} />
        <Route path="/about/jiye" element={<About1/>} />

        {/*5-2) 서브라우팅 사용*/}
        <Route path="/main/*" element={<Main/>} />

        {/*6-2) GET 파라미터 사용*/}
        <Route path="/department_get" element={<DepartmentGet/>} />

        {/*7-2) PATH 파라미터 사용*/}
        <Route path="/department_path/:id/:msg" element={<DepartmentPath/>} />

        {/*7-2) PATH 파라미터 사용*/}
        <Route path="/weather/:id/:msg" element={<Weather/>} />

        {/*8) 지정되지 않은 모든 요청 반응*/}
        <Route path="/*" element={<Error404/>} />
      </Routes>

    </div>
  );
}

export default App;
