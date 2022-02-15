import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { fetchCourses } from "../../redux/actions/CoursesActions";
import { Link } from "react-router-dom";

export const Courses = (): ReactElement => {
  const courses = useSelector((state: RootState) => state.courseslist.value);
  const dispatch = useDispatch();

  useEffect(() => {
    !courses.length && dispatch(fetchCourses());
  }, []);

  return (
    <div>
      {courses &&
        courses.map((el) => (
          <Link to={"/test"}>
            <div key={el.id}>{el.id}</div>
          </Link>
        ))}
    </div>
  );
};
