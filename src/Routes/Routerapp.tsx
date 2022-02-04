import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Courses from "../Pages/Courses";
import Test from "../Pages/Test";


const Routerapp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:testId" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default Routerapp;
