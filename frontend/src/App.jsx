import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RolePage from './Rolepage';  
import StudentPage from './studentlogin';
import AlumniPage from './aluminilogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RolePage />} />
        <Route path="/Studentpage" element={<StudentPage />} />
        <Route path="/Alumnipage" element={<AlumniPage />} />
      </Routes>
    </Router>
  );
}

export default App;
