import React, { memo, useReducer } from "react";

import styled from "styled-components";

import dayjs from "dayjs"; // for 날짜 처리

const DateRange2Container = styled.div``;

/**
 *
 *
 *
 *
 */
const setDateValue = (state, action) => {
  const day = dayjs();

  let sdate = null;

  switch (action) {
    case "DAY7":
      sdate = day.add(-7, "d").format("YYYY-MM-DD");
      break;
    case "DAY15":
      sdate = day.add(-15, "d").format("YYYY-MM-DD");
      break;
    case "MONTH1":
      sdate = day.add(-1, "M").format("YYYY-MM-DD");
      break;
    case "MONTH3":
      sdate = day.add(-3, "M").format("YYYY-MM-DD");
      break;
    case "MONTH6":
      sdate = day.add(-6, "M").format("YYYY-MM-DD");
      break;
    case "YEAR1":
      sdate = day.add(-1, "y").format("YYYY-MM-DD");
      break;
  }
  return { ...state, startDate: sdate };
};

const DateRange2 = memo(() => {
  const day = dayjs();

  /**
   * 화면에 출력할 상태값을 JSON 객체 myDate 로 정의 하고
   * 이 객체의 값을 갱신할수 있는 함수 setMyDate로 선언
   */
  const [myDate, setMyDate] = useReducer(setDateValue, {
    startDate: day.format("YYYY-MM-DD"),
    endDate: day.format("YYYY-MM-DD"),
  });

  return (
    <DateRange2Container>
      <h2>DateRange2</h2>

      <h3>
        {myDate.startDate} ~ {myDate.endDate}
      </h3>

      <div>
        <button type="button" onClick={(e) => setMyDate("DAY7")}>
          7일
        </button>
        <button type="button" onClick={(e) => setMyDate("DAY15")}>
          15일
        </button>
        <button type="button" onClick={(e) => setMyDate("MONTH1")}>
          1개월
        </button>
        <button type="button" onClick={(e) => setMyDate("MONTH3")}>
          3개월
        </button>
        <button type="button" onClick={(e) => setMyDate("MONTH6")}>
          6개월
        </button>
        <button type="button" onClick={(e) => setMyDate("YEAR1")}>
          1년
        </button>
      </div>
    </DateRange2Container>
  );
});

export default DateRange2;
