import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import mq from "../../components/MediaQuery";

import styled from "styled-components";

import dayjs from "dayjs";

import { Chart, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, LineElement } from "chart.js";

import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, LineElement);

const NewMemberMGraphContainer = styled.div`
  width: 100%;

  .NewMember-graph {
    height: 300px;
  }

  ${mq.maxWidth("md")`
      width: 100%;
  `}
`;

const NewMemberMGraph = memo(() => {
  const { monthly } = useSelector((state) => state.NewMemberSlice);
  console.log(monthly);

  const { NewMemberDate, NewMemberTotal } = useMemo(() => {
    if (!monthly) {
      return { NewMemberDate: [], NewMemberTotal: [] };
    }

    // monthly 데이터에서 NewMemberDate와 NewMemberTotal 배열 생성
    const NewMemberDate = monthly.map((v) => v.NewMemberDate);
    const NewMemberTotal = monthly.map((v) => v.NewMemberTotal);

    // reverse함수 호출해서 배열을 역순으로 변경 (시간 순서대로 보여주기 위함)
    NewMemberDate.reverse();
    NewMemberTotal.reverse();

    // 결과를 객체로 반환
    const result = { NewMemberDate, NewMemberTotal };

    return result;
  }, [monthly]);

  return (
    <NewMemberMGraphContainer>
      <div className="NewMember-graph">
        {/* {NewMemberDate && JSON.stringify(NewMemberDate)} */}
        {/* {NewMemberTotal && JSON.stringify(NewMemberTotal)} */}

        {NewMemberDate && NewMemberTotal && (
          <Line
            data={{
              labels: NewMemberDate,
              datasets: [
                {
                  label: "명",
                  data: NewMemberTotal,
                  backgroundColor: "rgba(255, 99, 132, 0.6)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "left",
                },
                title: {
                  display: true,
                  text: "월간 주별 총 신규회원 수",
                  font: {
                    size: 16,
                    color: "#000",
                  },
                },
              },
            }}
          />
        )}
      </div>
    </NewMemberMGraphContainer>
  );
});

export default NewMemberMGraph;
