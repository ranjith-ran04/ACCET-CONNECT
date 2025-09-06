import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RolePage from './components/RolePage/Rolepage';  
import AlumniReg from "./components/Alumnireg/Alumnireg";
import Sqlfile from "./Sqlfile";
import Login from "./components/Loginpage/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentForm from "./components/studentform/StudentForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RolePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumnireg" element={<AlumniReg />} />
        <Route path="/sql" element={<Sqlfile />} />
        <Route path="/stusuccess" element={<StudentForm />}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />

    </Router>
  );
}

export default App;
