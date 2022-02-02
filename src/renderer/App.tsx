import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Button from '@mui/material/Button';

const Hello = () => {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
