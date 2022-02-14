import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCourse } from "../../redux/Courseslist";
import { RootState } from "../../redux/Store";
import { fetchCourses } from "../../redux/actions/CoursesActions";
import { Link } from "react-router-dom";

export const Courses = (): ReactElement => {
  const [input, setInput] = useState<any | null>();
  const courses = useSelector((state: RootState) => state.courseslist.value);
  const dispatch = useDispatch();

  const addCourses = () => {
    dispatch(
      saveCourse({
        course: input,
      })
    );
  };

  useEffect(() => {
    !courses.length && dispatch(fetchCourses());
  }, []);

  return (
    <div>
      <div>
        {courses &&
          courses.map((el) => (
            <Link to={""}>
              <div key={el.id}>{el.id}</div>
            </Link>
          ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addCourses}>add</button>
    </div>
  );
};
