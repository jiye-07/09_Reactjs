import React, { memo, useState, useEffect } from "react";

import styled from "styled-components";

// 예제 확인을 위한 이미지 참조
import sample from "../../assets/img/sample.jpg";

const MyEffectContainer = styled.div``;

const MyEffect = memo(() => {
  // 예제 확인을 위한 상태값 --> 0~200 사이의 값을 갖는 이미지 밝기
  const [myBirghtness, setBirghtness] = useState(100);

  // 브라우저의 넓이를 의미하는 상태값
  const [myWidth, setMyWidth] = useState(window.innerWidth);

  // 브라우저의 넓이를 상태값에 적용하기 위한 이벤트 헨들러
  const onMyResize = (e) => {
    console.log(`창 사이즈 변경됨 >> ${window.innerWidth}`);
    setMyWidth(window.innerWidth);
  };

  // 설명

  /**
   * CASE 1 ===> 콜백 함수만 파라미터로 전달
   *
   *
   */

  useEffect(() => {
    // chrome 브라우저 로그 출력 수준에서 "상세" 황목 체크 필요
    console.debug("[Case1] %s ::: 화면에 컴포넌트가 처음 로드되거나 state,props 중 하나라도 변경될 경우 호출됨", new Date());
  });

  /**
   * CASE2 ==> 모니터링 할 상태 변수를 두 번째 파라미터로 전달되는 배열에 명시
   *
   *
   *
   *
   *
   */
  useEffect(() => {
    // chrome 브라우저 로그 출력 수준에서 "상세" 황목 체크 필요
    console.warn("[Case2] %s ::: myBirghtness값이 변경됨", new Date());
  }, [myBirghtness]);

  /**
   * CASE 3,4 ==> 두 번째 파라미터로 빈 배열을 설정함
   *
   *
   *
   *
   *
   *
   *
   *
   */
  useEffect(() => {
    // chrome 브라우저 로그 출력 수준에서 "상세" 황목 체크 필요
    console.error("[Case3] %s ::: 화면에 컴포넌트가 처음으로 로드 될 때 처리되어야 할 기능", new Date());

    //
    //
    window.addEventListener("resize", onMyResize);

    /** [CASE 4] 컴포넌트가 화면에서 사라질 때 호출되는 부분 */
    // 클로저 형태로 정의
    return () => {
      console.log("[Case4] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능", new Date());

      // 이 화면에서 빠져나갈때 등록된 이벤트를 제거 함
      window.removeEventListener("resize", onMyResize);
    };
  }, []);

  return (
    <MyEffectContainer>
      <h2>MyEffect</h2>

      <img
        alt="Hello React"
        src={sample}
        width={myWidth * 0.3}
        style={{
          filter: "brightness(" + myBirghtness + "%)",
        }}
      />

      <div>
        <input
          type="range"
          min={0}
          max={200}
          step={1}
          value={myBirghtness}
          onChange={(e) => {
            setBirghtness(e.currentTarget.value);
          }}
        />
      </div>
    </MyEffectContainer>
  );
});

export default MyEffect;
