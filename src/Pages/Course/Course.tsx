import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Course = (): ReactElement => {
  const { id } = useParams();

  return (
    <div>
      <h2>course id :{id}</h2>
    </div>
  );
};
