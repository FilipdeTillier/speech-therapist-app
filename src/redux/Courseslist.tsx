import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export interface CoursesState {
  value: any[];
}

const initialState: CoursesState = {
  value: [],
};

export const coursesSlice = createSlice({
  name: "courseslist",
  initialState,
  reducers: {
    saveCourse: (state, action: PayloadAction<any>) => {
      state.value.push(action.payload);
    },
  },
});

export const { saveCourse } = coursesSlice.actions;

export const showCourses = (state: RootState) => state.courseslist.value;

export default coursesSlice.reducer;
