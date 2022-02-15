import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { fetchCourses } from "../redux/actions/CoursesActions";

export const Test = (): ReactElement => {
  const course = useSelector((state: RootState) => state.courseslist.value);
  const dispatch = useDispatch();

  useEffect(() => {
    !course.length && dispatch(fetchCourses());
  }, []);

  return <div>{course && course.map((e) => <div key={e.id}>{e.id}</div>)}</div>;
};
