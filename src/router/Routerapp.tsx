import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Courses from "../Courses/Courses";
import Test from "../Games/Test";


function Routerapp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default Routerapp;
