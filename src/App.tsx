import { Router } from "./Routes/Router";
import "./App.scss";
import { Button } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <Router />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default App;
