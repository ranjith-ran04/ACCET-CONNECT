import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RolePage from './components/RolePage/Rolepage';  
import AlumniReg from "./components/Alumnireg/Alumnireg";
import Sqlfile from "./Sqlfile";
import Login from "./components/Loginpage/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RolePage />} />
        <Route path="/Studentpage" element={<Login />} />
        <Route path="/Alumnipage" element={<AlumniReg />} />
        <Route path="/sql" element={<Sqlfile />} />
      </Routes>
    </Router>
  );
}

export default App;
