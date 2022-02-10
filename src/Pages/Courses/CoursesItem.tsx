import { ReactElement } from "react";

export const CoursesItem = ({ name }: { name: any }): ReactElement => {
  return <div style={{ height: "200px", width: "100px" }}>{name}</div>;
};
