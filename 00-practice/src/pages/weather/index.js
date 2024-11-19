import React from "react";

import { useParams } from "react-router-dom";

const Weather = () => {
  // 요청 데이터 확인 하기
  const params = useParams();
  const day = params.day;

  const weather = {
    mon: ["맑음", "맑음"],
    tue: ["비", "맑음"],
    wed: ["맑음", "흐림"],
    thu: ["맑음", "흐림"],
    fri: ["흐림", "흐림"],
    sat: ["비", "맑음"],
    sun: ["맑음", "맑음"],
  };

  const weatherList = weather[day];

  return (
    <div>
      <h2>오전</h2>
      <p>{weatherList[0]}</p>

      <h2>오후</h2>
      <p>{weatherList[1]}</p>
    </div>
  );
};

export default Weather;
