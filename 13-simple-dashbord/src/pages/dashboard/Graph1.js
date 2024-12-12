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
  // 막대그래프
  BarElement,
  plugins,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// 미디어쿼리
import mq from "../../components/MediaQuery";

// chart.js 에서 import한 Chaet 클래스에 나머지 import 요소들을 등록한다
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

const Graph1Container = styled.div`
  width: 50%;

  ${mq.maxWidth("md")`
    width: 100%;
  `}

  .container {
    /* background-color: #1492ff77; */
    margin: 10px;
    height: 300px;
  }
`;

const Graph1 = memo(() => {
  // 기본 데이터 처리
  const { item } = useSelector((state) => state.TitanicSlice);

  // 연령별 탑승객 현황
  const { keys, values } = useMemo(() => {
    if (!item) {
      return { key: null, values: null };
    }

    console.group("Graph1");

    const ageData = item.reduce((acc, cur) => {
      const ageLevel = `${parseInt(cur.age / 10) * 10}대`;

      if (acc[ageLevel] == undefined) {
        acc[ageLevel] = 1;
      } else {
        acc[ageLevel]++;
      }

      console.groupEnd();

      return acc;
    }, {});

    console.log(ageData);

    const keys = Object.keys(ageData).sort();
    console.log(keys);

    const values = keys.map((v, i) => ageData[v]);
    console.log(values);

    const result = { keys, values };
    console.log(result);

    return result;
  }, [item]);

  return (
    <Graph1Container>
      <div className="container">
        {keys && values && (
          <Bar
            data={{
              labels: keys,
              datasets: [
                {
                  label: "명",
                  data: values,
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              // 반응형 기능 사용
              Responsive: true,
              // 세로 높이를 스스로 설정 (false인 경우 부모에 맞춤)
              maintainAspectRatio: false,
              plugins: {
                // 범주의 위치
                legend: {
                  position: "bottom",
                },
                title: {
                  display: true,
                  text: "연령별 탑승객 집계",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}
          ></Bar>
        )}
      </div>
    </Graph1Container>
  );
});

export default Graph1;
