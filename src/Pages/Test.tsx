import { useParams } from "react-router-dom";

const Test = () => {
  
  const params = useParams();

  return <h1>{params.testId}</h1>

}

export default Test;
