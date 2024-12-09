import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";

// 연동할 백엔드 주소 (에러테스트용)
// const API_URL ='./grade123';
// 연동할 백엔드 주소 (정상)
const API_URL = "/grade";

// Ajax 처리를 위한 함수를 정의
export const getList = createAsyncThunk("GradeSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axiosHelper.get(API_URL);
  } catch (err) {
    // err 객체는 axiosHelper에서 throw하는 에러 객체
    result = rejectWithValue(err);
  }

  return result;
});

// 슬라이스 객체 생성
const GradeSlice = createSlice({
  // 1)
  name: "GradeSlice",

  // 2)
  initialState: {
    status: 200,
    message: "OK",
    item: null,
    timestamp: null,
    loading: false,
  },

  // 3)
  reducers: {},

  // 4)
  extraReducers: (builder) => {
    //
    //
    //
    builder.addCase(getList.pending, (state, { meta, payload }) => {
      return { ...state, loading: true };
    });

    // 백엔드와 연동 성공시 호출된다
    builder.addCase(getList.fulfilled, (state, { meta, payload }) => {
      return {
        status: payload.status,
        message: payload.message,
        item: payload.item,
        timestamp: payload.timestamp,
        loading: false,
      };
    });

    // 백엔드와 연동 실패시 호출된다
    builder.addCase(getList.rejected, (state, { meta, payload }) => {
      return {
        ...state,
        loading: false,
        status: payload.status || 0,
        message: payload.message || "Unknown Error",
      };
    });
  },
});

// 리듀서 객체 내보내기
export default GradeSlice.reducer;
