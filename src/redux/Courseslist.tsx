import { createSlice } from "@reduxjs/toolkit";

export interface CoursesState {
  value: { course: string }[];
}

const initialState: CoursesState = {
  value: [{ course: "firstacourse" }, { course: "secondcourse" }],
};

export const coursesSlice = createSlice({
  name: "courseslist",
  initialState,
  reducers: {},
});

export const {} = coursesSlice.actions;

export default coursesSlice.reducer;
