import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";
import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/titanic";

export const getList = createAsyncThunk("TitanicSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axiosHelper.get(API_URL);
  } catch (err) {
    result = rejectWithValue(err);
  }

  return result;
});

const TitanicSlice = reduxHelper.getDefaultSlice("TitanicSlice", [getList]);

export default TitanicSlice.reducer;
