import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCourse } from "../../common/interfaces/TCourse";
import { request } from "../../utils/request";

const storePrefix = "courses";

export const fetchCourses = createAsyncThunk(
  `${storePrefix}/fetchCourses`,
  async (id) => {
    const { data } = await request.get<TCourse[]>(
      `http://localhost:3000/courses/`
    );
    return data;
  }
);
