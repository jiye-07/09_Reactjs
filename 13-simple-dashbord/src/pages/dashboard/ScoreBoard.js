import React, { memo, useMemo } from "react";

import styled from "styled-components";

// https://www.npmjs.com/package/react-countup
import CountUp from "react-countup";

/** 리덕스 관련 */
// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";

const ScoreBoardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .my-counter {
    margin: 0 10px;
    width: 25%;
    height: 140px;
    background-color: #06f6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    h2 {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      font-weight: normal;
      color: #fff;
      margin-bottom: 10px;
    }

    .my-counter-number {
      font-size: 45px;
      font-weight: 700;
      margin: 0;
      color: #fff;

      &.per:after {
        content: "%";
      }
    }
  }
`;

const ScoreBoard = memo(() => {
  // 기본 데이터 처리
  // 백엔드로부터의 결과값만 필요하므로 나머지는 선언하지 않음
  const { loading, status, message, item } = useSelector((state) => state.TitanicSlice);

  /** 백엔드로부터 데이터를 받아온 후 필요한 집계 데이터 생성 */
  const [totalPassenger, totalSurvived, totalDead, survivalRate] = useMemo(() => {
    if (!item) {
      return [0, 0, 0, 0];
    }

    // 전체 탑승객 수
    const totalPassenger = item.length;

    // 전체 생존자 수
    const totalSurvived = item.filter((v, i) => v.survived).length;

    // 전체 사망자 수
    const totalDead = totalPassenger - totalSurvived;

    // 생존율
    const survivalRate = (totalSurvived / totalPassenger) * 100;

    return [totalPassenger, totalSurvived, totalDead, survivalRate];
  }, [item]);

  return (
    <ScoreBoardContainer>
      <div className="my-counter">
        <h2>전체 탑승객 수</h2>
        <CountUp
          start={1} // 시작값
          end={totalPassenger} // 종료값
          duration={5} // 3초동안 애니메이션 가동(기본값 = 2)
          enableScrollSpy // 스크롤에 반응해라~
          scrollSpyDelay={1000} // 스크롤에 의해 화면에 표시된 후 딜레이 시간
          className="my-counter-number"
        />
      </div>
      <div className="my-counter">
        <h2>생존자 수</h2>
        <CountUp
          start={1} // 시작값
          end={totalSurvived} // 종료값
          duration={5} // 3초동안 애니메이션 가동(기본값 = 2)
          enableScrollSpy // 스크롤에 반응해라~
          scrollSpyDelay={1000} // 스크롤에 의해 화면에 표시된 후 딜레이 시간
          className="my-counter-number"
        />
      </div>
      <div className="my-counter">
        <h2>사망자 수</h2>
        <CountUp
          start={1} // 시작값
          end={totalDead} // 종료값
          duration={5} // 3초동안 애니메이션 가동(기본값 = 2)
          enableScrollSpy // 스크롤에 반응해라~
          scrollSpyDelay={1000} // 스크롤에 의해 화면에 표시된 후 딜레이 시간
          className="my-counter-number"
        />
      </div>
      <div className="my-counter">
        <h2>생존율</h2>
        <CountUp
          start={1} // 시작값
          end={survivalRate} // 종료값
          duration={5} // 3초동안 애니메이션 가동(기본값 = 2)
          enableScrollSpy // 스크롤에 반응해라~
          scrollSpyDelay={1000} // 스크롤에 의해 화면에 표시된 후 딜레이 시간
          className="my-counter-number per"
        />
      </div>
    </ScoreBoardContainer>
  );
});

export default ScoreBoard;
