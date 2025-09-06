import { useState } from 'react';
import './Login.css'
import axios from "axios";
import { toast } from "react-toastify";
import { path } from '../constants/backendpath';
import { useNavigate,useLocation } from 'react-router-dom';
const Login = () => {
 
  // const [error, setError] = useState({});
  const[formData,setFormData]=useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "";

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("hii");
    try {
      console.log("hi");
      const res = await axios.post(`${path}logincredentials`,formData);
      if(res.status===200){
        toast.success("Logged in successfully");
        navigate('/stusuccess');
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Login");
    }


    // if (!email || !pass) {
    //   setError("⚠ Please fill in all fields");
    // } else if (email !== "testuser" || pass !== "1234") {
    //   setError("❌ Invalid email or password");
    // } else {``
    //   setError("");
    //   alert("✅ Login successful!");
    // }
  };
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
    <div className="login-container">
      <h2>Welcome to Accet Connect</h2>
      <h2 className="form-title">Hi, Connectors!</h2>
      <img src="logo.png"></img>
    
      <p className="separator"><span></span></p>

      <form className="login-form"  >
        <div className="input-wrapper">
          <i className="material-symbols-rounded">📧</i>
           {role === "student" && (
            <input
              name="regno"
              type="text"
              placeholder="Enter Register Number"
              className="input-field"
              value={formData.regno || ""}
              onChange={handleChange}
            />
          )}

          {role === "alumni" && (
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="input-field"
              value={formData.email || ""}
              onChange={handleChange}
            />
          )}
        </div>

        <div className="input-wrapper">
          <i className="material-symbols-rounded">🔒</i>
          <input
            name="aadhar"
            type="password"
            placeholder="Password"
            className="input-field"
            value={formData.aadhar}
            onChange={handleChange}
          />
        </div>

        {/* {error && <p className="error-message">{error}</p>} */}

        <a href="#" className="forget-pass">Forgot Password?</a>
        <button type="submit" className="login-button" onClick={handleLogin}>Log in</button>
      </form>

      <p className="signup-text">
        Don't have an account? <a href="#">Sign up now</a>
      </p>
    </div>

    </div>
  )
}
export default Login;
