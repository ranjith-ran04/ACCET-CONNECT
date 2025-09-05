<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alumnireg from './components/Alumnireg'
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RolePage from './components/RolePage/Rolepage';  
import AlumniReg from "./components/Alumnireg/Alumnireg";
import Sqlfile from "./Sqlfile";
import Login from "./components/Loginpage/Login";
>>>>>>> 8928c5ef38327a852280c43dc30a601fcf210efc

function App() {
  return (
<<<<<<< HEAD
    <div>
    
    </div>
    
  )
=======
    <Router>
      <Routes>
        <Route path="/" element={<RolePage />} />
        <Route path="/Studentpage" element={<Login />} />
        <Route path="/Alumnipage" element={<AlumniReg />} />
        <Route path="/sql" element={<Sqlfile />} />
      </Routes>
    </Router>
  );
>>>>>>> 8928c5ef38327a852280c43dc30a601fcf210efc
}

export default App;
