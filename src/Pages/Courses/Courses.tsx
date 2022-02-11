import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { saveCourse } from "../../redux/Courseslist";
import { CoursesItem } from "./CoursesItem";
import { showCourses } from "../../redux/Courseslist";

export const Courses = (): ReactElement => {
  //const courses = useSelector((state: RootState) => state.courseslist.value);

  const [input, setInput] = useState<any | null>(null);
  const dispatch = useDispatch();

  const coursesList = useSelector(showCourses);

  const addCourses = () => {
    dispatch(
      saveCourse({
        course: input,
      })
    );
  };

  return (
    <div>
      <div>
        {coursesList.map((course) => (
          <CoursesItem name={course.course} />
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addCourses}>add</button>
    </div>
  );
};
