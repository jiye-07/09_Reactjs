import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

import axiosHelper from "../../helpers/AxiosHelper";

// 이전 수업
// import NewsData from "../../data/NewsData";

const News = () => {
  // 이번 수업
  const [newsData, setNewsData] = useState([]);
  //
  //
  useEffect(() => {
    (async () => {
      //
      let data = null;

      try {
        data = await axiosHelper.get("/news");
      } catch (e) {
        alert(e.message);
        return;
      }

      console.log(data.item);

      //
      setNewsData(data.item);
    })();
  }, []);

  return (
    <div>
      <h1>News</h1>

      <nav>
        <Link to="/news/card">카드형</Link>&nbsp;|&nbsp;
        <Link to="/news/list">리스트형</Link>
      </nav>

      <Routes>
        <Route path="card" element={<NewsCard news={newsData} />} />
        <Route path="list" element={<NewsList news={newsData} />} />
      </Routes>
    </div>
  );
};

export default News;
