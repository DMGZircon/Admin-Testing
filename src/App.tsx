import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Homepage} from './pages/Homepage';
import AdminPage from './components/Admin'; // Make sure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPage />} /> {/* Admin route */}
      </Routes>
    </Router>
  );
}

export default App;
