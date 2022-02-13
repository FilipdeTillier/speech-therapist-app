import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCourse } from "../common/interfaces/TCourse";
import { fetchCourses } from "./actions/CoursesActions";
import { RootState } from "./Store";

export interface CoursesState {
  value: TCourse[];
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
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => ({
      ...state,
      value: action.payload,
    }));
  },
});

export const { saveCourse } = coursesSlice.actions;

export const showCourses = (state: RootState) => state.courseslist.value;

export default coursesSlice.reducer;
