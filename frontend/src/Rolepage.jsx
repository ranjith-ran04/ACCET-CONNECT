import React from "react";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGraduationCap,faBriefcase} from "@fortawesome/free-solid-svg-icons"
import "./rolepage.css"; 

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
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate("/studentpage"); // navigate to Student page
  };

  const handleAlumniClick = () => {
    navigate("/alumnipage"); // navigate to Alumni page
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
          onDoubleClick={handleAlumniClick}
        />
        
      </div>
    </div>
  );
};

export default RolePage;