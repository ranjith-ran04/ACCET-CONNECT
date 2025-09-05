import { useState } from 'react';
import axios from 'axios';
import './AlumniReg.css';
import { path } from '../constants/backendpath';
// import { toast } from 'react-toastify';

const AlumniReg = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    phone: '',
    department: '',
    graduation_year: '',
    current_role: '',
    company: '',
    linkedin: ''
  });
  const[error,setError]=useState({});
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hi");
      const res = await axios.post(`${path}alumniform`,formData);
      if(res.status===200){
        toast.success("Alumni registration completed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to register");
    }
  };
  return (
    <div className='container'>
      <form className='form'>
        <h2>Alumni Registration</h2>
        <div className='inputbox'><input name='full_name' required onChange={handleChange}/><span>Full Name</span><i></i>
        </div>
        <div className='inputbox'><input name='email' type='email' required onChange={handleChange}/><span>Email</span><i></i></div>
        <div className='inputbox'><input name='phone' type='tel' required onChange={handleChange}/><span>Phone Number</span><i></i>
        </div>
        <div className='dropdown'>
          <label>Department</label>
          <select name='department' required onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="EEE">EEE</option>
            <option value="CIVIL">CIVIL</option>
          </select>
          <i></i>
        </div>
        <div className='inputbox'><input name='graduation_year' type='number' required onChange={handleChange}/><span>Graduation Year</span><i></i>
        </div>
        <div className='inputbox'><input name='current_role' required onChange={handleChange}/><span>Current Role</span><i></i>
        </div>
        <div className='inputbox'><input name='company' required onChange={handleChange}/><span>Company</span>
        <i></i>
        </div>  
        <div className='inputbox'>
          <input name='linkedin' onChange={handleChange} required/><span>LinkedIn</span>
          <i></i>
        </div>
        <div className='inputbox'>
          <input name='password' type='password' onChange={handleChange} required/>
        <span>Password</span><i></i>
        </div>
        <button className='submit-btn' onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};
export default AlumniReg;