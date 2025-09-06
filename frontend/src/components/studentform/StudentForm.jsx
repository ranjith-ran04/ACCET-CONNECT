import React, { useState, useRef, useEffect } from "react";
import "./StudentForm.css";
import logo from "../../assets/logos.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    semester: "",
    passingOutYear: "",
    skills: "",
    interest: "",
    careerPath: "",
    lookingFor: "",
  });

  const refs = {
    registerNumber: useRef(),
    name: useRef(),
    email: useRef(),
    phone: useRef(),
    department: useRef(),
    year: useRef(),
    semester: useRef(),
    passingOutYear: useRef(),
    skills: useRef(),
    interest: useRef(),
    careerPath: useRef(),
    lookingFor: useRef(),
    submit: useRef(),
  };

  useEffect(() => {
    refs.registerNumber.current?.focus();
  }, []);

  const capitalizeWords = (value) =>
    value
      .split(" ")
      .map((word) =>
        word.length > 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : ""
      )
      .join(" ");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "registerNumber" && !/^\d*$/.test(value)) return;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    if (name === "passingOutYear" && !/^\d*$/.test(value)) return;
    if (name === "name" && !/^[a-zA-Z. ]*$/.test(value)) return;

    if (["name", "skills", "interest", "careerPath", "lookingFor"].includes(name)) {
      setFormData({ ...formData, [name]: capitalizeWords(value) });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    Object.keys(formData).forEach((key) => {
      if (
        !formData[key] &&
        !["skills", "interest", "careerPath", "lookingFor"].includes(key)
      ) {
        formErrors[key] = `Please enter your ${key
          .replace(/([A-Z])/g, " $1")
          .toLowerCase()}`;
      }
    });

    if (formData.phone && formData.phone.length !== 10) {
      formErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (formData.passingOutYear && formData.passingOutYear.length !== 4) {
      formErrors.passingOutYear = "Passing Out Year must be 4 digits (e.g., 2026)";
    }

    if (formData.name && !/^[a-zA-Z. ]+$/.test(formData.name)) {
      formErrors.name = "Name can only contain letters and dot (.) for initials";
    }

    if (
      formData.email &&
      !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)
    ) {
      formErrors.email = "Email must be in the format something@gmail.com";
    }

    if (Object.keys(formErrors).length > 0) {
      Object.values(formErrors).forEach((err) => {
        toast.error(err, { position: "top-right", autoClose: 3000 });
      });

      const firstErrorField = Object.keys(formErrors)[0];
      refs[firstErrorField]?.current?.focus();
      return;
    }

    toast.success("🎉 Student Registered Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    console.log("Student Data:", formData);

    setFormData({
      registerNumber: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      semester: "",
      passingOutYear: "",
      skills: "",
      interest: "",
      careerPath: "",
      lookingFor: "",
    });

    refs.registerNumber.current?.focus();
  };

  const handleDropdownKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.click();
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const errorFields = Object.keys(formData).filter((key) => {
        if (
          !formData[key] &&
          !["skills", "interest", "careerPath", "lookingFor"].includes(key)
        )
          return true;
        if (key === "phone" && formData[key].length !== 10) return true;
        if (key === "passingOutYear" && formData[key].length !== 4) return true;
        return false;
      });

      if (errorFields.length > 0) {
        refs[errorFields[0]].current.focus();
      } else {
        if (field === "phone") refs.department.current.focus();
        else if (field === "department") refs.year.current.focus();
        else if (field === "year") refs.semester.current.focus();
        else if (field === "semester") refs.passingOutYear.current.focus();
        else if (field === "passingOutYear") refs.skills.current.focus();
        else if (field === "skills") refs.interest.current.focus();
        else if (field === "interest") refs.careerPath.current.focus();
        else if (field === "careerPath") refs.lookingFor.current.focus();
        else refs.submit.current.focus();
      }
    }
  };

  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="form-divider"></div>

      <form onSubmit={handleSubmit} autoComplete="off">
        {Object.keys(formData).map((field) => (
          <div className="input-group" key={field}>
            <label
              className={formData[field] !== "" ? "active" : ""}
            >
              {field === "registerNumber"
                ? "Register Number"
                : field === "passingOutYear"
                ? "Passing Out Year"
                : field.replace(/([A-Z])/g, " $1").replace(/^./, (str) =>
                    str.toUpperCase()
                  )}
            </label>

            {field === "department" ? (
              <select
                name="department"
                className="black-text line-input dropdown"
                value={formData.department}
                onChange={handleChange}
                onKeyDown={(e) => {
                  handleKeyDown(e, "department");
                  handleDropdownKeyDown(e);
                }}
                ref={refs.department}
              >
                <option value=""></option>
                <option value="Civil">Civil</option>
                <option value="Mechanical">Mechanical</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
              </select>
            ) : field === "year" ? (
              <select
                name="year"
                className="black-text line-input dropdown"
                value={formData.year}
                onChange={handleChange}
                onKeyDown={(e) => {
                  handleKeyDown(e, "year");
                  handleDropdownKeyDown(e);
                }}
                ref={refs.year}
              >
                <option value=""></option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </select>
            ) : field === "semester" ? (
              <select
                name="semester"
                className="black-text line-input dropdown"
                value={formData.semester}
                onChange={handleChange}
                onKeyDown={(e) => {
                  handleKeyDown(e, "semester");
                  handleDropdownKeyDown(e);
                }}
                ref={refs.semester}
              >
                <option value=""></option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
              </select>
            ) : ["skills", "interest", "careerPath", "lookingFor"].includes(field) ? (
              <textarea
                name={field}
                className="black-text line-input"
                value={formData[field]}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, field)}
                ref={refs[field]}
                autoComplete="off"
              />
            ) : (
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "phone" || field === "registerNumber" || field === "passingOutYear"
                    ? "number"
                    : "text"
                }
                name={field}
                className="black-text line-input"
                value={formData[field]}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, field)}
                ref={refs[field]}
                autoComplete="off"
              />
            )}
          </div>
        ))}

        <button type="submit" ref={refs.submit}>
          Register
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default StudentForm;

