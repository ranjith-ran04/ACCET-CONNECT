import { useState } from 'react';
import './Login.css'
const Login = () => {
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailOrUser.trim();
    const pass = password.trim();

    if (!email || !pass) {
      setError("⚠ Please fill in all fields");
    } else if (email !== "testuser" || pass !== "1234") {
      setError("❌ Invalid email or password");
    } else {
      setError("");
      alert("✅ Login successful!");
    }
  };

  return (
    <div>
    <div className="login-container">
      <h2>Welcome to Accet Connect</h2>
      <h2 className="form-title">Hi, Connectors!</h2>
      <img src="logo.png"></img>
    
      <p className="separator"><span></span></p>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-wrapper">
          <i className="material-symbols-rounded">📧</i>
          <input
            type="text"
            placeholder="Email or Username"
            className="input-field"
            value={emailOrUser}
            onChange={(e) => {
              setEmailOrUser(e.target.value);
              if (error) setError("");
            }}
          />
        </div>

        <div className="input-wrapper">
          <i className="material-symbols-rounded">🔒</i>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError("");
            }}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <a href="#" className="forget-pass">Forgot Password?</a>
        <button type="submit" className="login-button">Log in</button>
      </form>

      <p className="signup-text">
        Don't have an account? <a href="#">Sign up now</a>
      </p>
    </div>

    </div>
  )
}
export default Login;
