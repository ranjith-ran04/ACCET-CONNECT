import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGraduationCap,faBriefcase} from "@fortawesome/free-solid-svg-icons"
import "./rolepage.css"; 
import { useState } from "react";
// import Login from "../Loginpage/Login";
// import AlumniReg from "../Alumnireg/Alumnireg";


const RoleCard = ({ icon, title, description, benefits, onClick }) => (
  <div className="role-card" onClick={onClick}>
    <div className="role-icon"><FontAwesomeIcon icon={icon}/></div>
    <h2>{title}</h2>
    <p className="role-desc">{description}</p>
    <ul>
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
  </div>
);

const RolePage = () => {
  const [role,setRole]=useState("")

  const navigate = useNavigate();

  const handleStudentClick = () => {
   navigate("/login", { state: { role: "student" } });
  };

  const handleAlumniClick = () => {
   navigate("/alumnireg", { state: { role: "alumni" } });
  };
  


  return (
    <div className="role-page">
      <div className="role-header">
        <a href="/" className="back-link">Back to Home</a>
        <h1>Join Our Community</h1>
        <p className="subtitle">Choose your role to get started with the right experience</p>
      </div>
      <div className="role-cards">
        <RoleCard
          icon={faGraduationCap}
          title="I'm a Student"
          description="Connect with alumni, find mentors, discover opportunities, and grow your network."
          benefits={[
            "Find mentors in your field",
            "Access job opportunities",
            "Join networking events",
            "Get career guidance",
          ]}
          onClick={handleStudentClick}
        />
        <RoleCard
          icon={faBriefcase}
          title="I'm an Alumni"
          description="Give back to your alma mater by mentoring students and sharing opportunities."
          benefits={[
            "Mentor current students",
            "Post job opportunities",
            "Share industry insights",
            "Build professional network",
          ]}
          onClick={handleAlumniClick}
        />
        
      </div>
    </div>
  );
};

export default RolePage;