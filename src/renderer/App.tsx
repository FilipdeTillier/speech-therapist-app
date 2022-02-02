import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const Hello = () => {
  return <div>app</div>;
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
