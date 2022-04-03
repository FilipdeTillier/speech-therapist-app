import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Course = (): ReactElement => {
  const { id } = useParams();
  const coursedetails = fetch("http://localhost:3000/courses/" + id);

  return (
    <div>
      <h2>course id :{id}</h2>
    </div>
  );
};
