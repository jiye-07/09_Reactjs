import React, { memo, useMemo } from "react";

import styled from "styled-components";

// 리덕스 관련
import { useSelector } from "react-redux";

// chart.js 관련
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  // 파이그래프
  ArcElement,
} from "chart.js";

import { Pie } from "react-chartjs-2";

// 미디어쿼리
import mq from "../../components/MediaQuery";

// chart.js 에서 import한 Chaet 클래스에 나머지 import 요소들을 등록한다
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement);

const Graph5Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .container {
    height: 500px;
    width: 33.3%;

    ${mq.maxWidth("md")`
    width: 100%;
  `}
  }
`;

const Graph5 = memo(() => {
  // 기본 데이터 처리
  const { item } = useSelector((state) => state.TitanicSlice);

  // 연령별 탑승객 현황
  const { passingers, survived, dead } = useMemo(() => {
    if (!item) {
      return { passingers: [0, 0, 0], survived: [0, 0, 0], dead: [0, 0, 0] };
    }

    const pclassData = item.reduce(
      (acc, cur) => {
        const pclass = cur.pclass;
        acc.passingers[pclass - 1]++;

        if (cur.survived) {
          acc.survived[pclass - 1]++;
        } else {
          acc.dead[pclass - 1]++;
        }

        return acc;
      },
      { passingers: [0, 0, 0], survived: [0, 0, 0], dead: [0, 0, 0] }
    );

    console.group("Graph5");
    console.log(pclassData);
    console.groupEnd();

    return pclassData;
  }, [item]);

  return (
    <Graph5Container>
      <div className="container">
        {passingers && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"],
              datasets: [
                {
                  label: "명",
                  data: passingers,
                  backgroundColor: ["#BFECFF66", "#CDC1FF66", "#FFCCEA66"],
                  borderColor: ["#BFECFF", "#CDC1FF", "#FFCCE6"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              Responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "left",
                },
                title: {
                  display: true,
                  text: "객실 등급별 탑승객 집계",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Pie>
        )}
      </div>

      <div className="container">
        {passingers && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"],
              datasets: [
                {
                  label: "명",
                  data: survived,
                  backgroundColor: ["#BFECFF66", "#CDC1FF66", "#FFCCEA66"],
                  borderColor: ["#BFECFF", "#CDC1FF", "#FFCCE6"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              Responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "left",
                },
                title: {
                  display: true,
                  text: "객실 등급별 생존 비율",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Pie>
        )}
      </div>

      <div className="container">
        {passingers && (
          <Pie
            data={{
              labels: ["1등급", "2등급", "3등급"],
              datasets: [
                {
                  label: "명",
                  data: dead,
                  backgroundColor: ["#BFECFF66", "#CDC1FF66", "#FFCCEA66"],
                  borderColor: ["#BFECFF", "#CDC1FF", "#FFCCE6"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              Responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "left",
                },
                title: {
                  display: true,
                  text: "객실 등급별 사망 비율",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Pie>
        )}
      </div>
    </Graph5Container>
  );
});

export default Graph5;
