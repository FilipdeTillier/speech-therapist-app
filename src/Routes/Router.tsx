import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../Pages/MainPage/MainPage";
import { Courses } from "../Pages/Courses/Courses";
import { Course } from "../Pages/Course/Course";
import { Layout } from "../components/Layout/Layout";
import { ReactElement } from "react";
import { store } from "../redux/Store";
import { Provider } from "react-redux";

export const Router = (): ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<Course />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
