import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

export const Courses = (): ReactElement => {
  const courses = useSelector((state: RootState) => state.courseslist.value);

  return <div>{courses}</div>;
};
