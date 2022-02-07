import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

export const Courses = (): ReactElement => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <div>{count}</div>
    </div>
  );
};
