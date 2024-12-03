import React, { memo, useEffect, useState } from "react";

import styled from "styled-components";

import axiousHelper from "../../helpers/AxiosHelper";

import Table from "../../components/Table";
import { SexLabel, EmbarkedLabel, SurvivedLabel } from "./Labels";
const TitanicContainer = styled.div``;

const Titanic = memo(() => {
  // Ajax 결과를 저장할 상태 변수
  const [titanicData, setTitinicData] = useState([]);

  // 로딩 상태를 처리할 상태변수
  const [loading, setLoading] = useState(false);

  // 컴포넌트 렌더링과 동시에 실행되기 위한 훅
  useEffect(() => {
    // Ajax 처리를 위한 비동기 구조
    (async () => {
      let data = null;

      setLoading(true);

      try {
        data = await axiousHelper.get("/titanic");
        console.log(data);
      } catch (e) {
        alert(e.message);
        return;
      }

      setTitinicData(data.item);
      setLoading(false);
    })();
  }, []);
  return (
    <TitanicContainer>
      <h2>Titanic</h2>

      <Table>
        <thead>
          <tr>
            <th>승객번호</th>
            <th>승객이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>동승자 수</th>
            <th>객실등급</th>
            <th>방 호수</th>
            <th>티켓번호</th>
            <th>요금</th>
            <th>탑승지</th>
            <th>생존여부</th>
          </tr>
        </thead>
        <tbody>
          {titanicData.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>
                  <SexLabel sex={v.sex} />
                </td>
                <td>{v.age}</td>
                <td>{v.sibsp + v.parch}</td>
                <td>{v.pclass}등급</td>
                <td>{v.cabin}</td>
                <td>{v.ticket}</td>
                <td>{v.fare}</td>
                <td>
                  <EmbarkedLabel embarked={v.embarked} />
                </td>
                <td>
                  <SurvivedLabel survived={v.survived} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TitanicContainer>
  );
});

export default Titanic;
