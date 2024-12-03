import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

import axiosHelper from "../../helpers/AxiosHelper";

// 이전 수업
// import NewsData from "../../data/NewsData";

// 로딩바 컴포넌트
import { Blocks } from "react-loader-spinner";

const News = () => {
  // 이번 수업
  const [newsData, setNewsData] = useState([]);
  //
  //
  // 로딩 상태를 처리할 상태변수
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      //
      let data = null;

      // 로딩 상태임을 표시
      setLoading(true);

      try {
        data = await axiosHelper.get("/news");
      } catch (e) {
        alert(e.message);
        return;
      }

      console.log(data.item);

      //
      setNewsData(data.item);

      //
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <h1>News</h1>

      <nav>
        <Link to="/news/card">카드형</Link>&nbsp;|&nbsp;
        <Link to="/news/list">리스트형</Link>
      </nav>

      <Blocks
        visible={loading}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          position: "fixed",
          zIndex: 9999,
          left: "50%",
          top: "50%",
          tranform: "translate(-50%, -50%)",
        }}
        wrapperClass=""
      />

      <Routes>
        <Route path="card" element={<NewsCard news={newsData} />} />
        <Route path="list" element={<NewsList news={newsData} />} />
      </Routes>
    </div>
  );
};

export default News;
