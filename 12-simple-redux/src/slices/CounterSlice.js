import { createSlice } from "@reduxjs/toolkit";

// const CounterSliceContainer = styled.div``;

const CounterSlice = createSlice({
  // 1) Slice 객체의 이름 --> slice 객체명과 동일하게 설정
  name: "CounterSlice",

  // 2) 이 모듈이 관리하고자하는 상태값들을 명시 --> 이 안의 변수들은 자유롭게 나열
  initialState: {
    number: 0,
    color: "#000",
  },

  // 3) 상태값을 갱신하기 위한 함수들을 구현한다
  // --> 파라미터는 state, action 으로 고정되어 있다
  // --> state: 현재 상태값을 가리킨다
  // --> 컴포넌트에서 이 함수들을 호출할때 전달되는 파라미터는 `action.payload` 로 전달된다
  // --> initialState 와 동일한 구조의 Json을 리턴해야한다

  reducers: {
    plus: (state, action) => {
      const numberValue = state.number + action.payload;
      let colorValue = "#000";

      if (numberValue > 0) {
        colorValue = "#2f77eb";
      } else if (numberValue < 0) {
        colorValue = "#f60";
      }

      return {
        number: numberValue,
        color: colorValue,
      };
    },

    minus: (state, action) => {
      const numberValue = state.number - action.payload;
      let colorValue = "#000";

      if (numberValue > 0) {
        colorValue = "#2f77eb";
      } else if (numberValue < 0) {
        colorValue = "#f60";
      }

      return {
        number: numberValue,
        color: colorValue,
      };
    },
  },
});

// 액션함수들 내보내기
export const { plus, minus } = CounterSlice.actions;

// 리듀서 객체 내보내기
export default CounterSlice.reducer;
