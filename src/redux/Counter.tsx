import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "courses",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
