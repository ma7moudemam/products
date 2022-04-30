import React, { useState } from "react";
import "./Register.css";
function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
    nameErr: null,
    emailErr: null,
    usernameErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
  });

  const handleFormChange = (event) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(event.target.id === 'name'){
      setUserForm({
          ...userForm,
          name: event.target.value
      });

      setUserFormErrs({
          ...userFormErrs,
          nameErr:
          event.target.value.lenght === 0
          ? "Username is required" :
          event.target.value.length < 3
          ? "Username must be at least 3 characters long":null

      });
  }else if(event.target.id === 'email'){
      setUserForm({
          ...userForm,
          email: event.target.value
      })  

      setUserFormErrs({
          ...userFormErrs,
          emailErr: event.target.value.lenght === 0
          ? "Email is required" :
          regex.test(event.target.value) ===false
          ?"Invalid email" 
          :null
      })
  }else if(event.target.id === 'username'){
      setUserForm({
          ...userForm,
          username: event.target.value
      })  

      setUserFormErrs({
          ...userFormErrs,
          usernameErr: event.target.value.lenght === 0
          ? "Username is required" :
          event.target.value.length < 3
          ? "Username must be at least 3 characters long":null
      })
  }else if(event.target.id === 'password'){
      setUserForm({
          ...userForm,
          password: event.target.value
      })  

      setUserFormErrs({
          ...userFormErrs,
          passwordErr: event.target.value.lenght === 0
          ? "Password is required" :
          event.target.value.length < 8
          ? "Password must be at least 8 characters long" :
          strongRegex.test(event.target.value) === false 
          ? "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
          :null
      })
  }else if(event.target.id === 'confirmPassword'){
      setUserForm({
          ...userForm,
          confirmPassword: event.target.value
      })  

      setUserFormErrs({
          ...userFormErrs,
          confirmPasswordErr: event.target.value.lenght === 0
          ? "Confirm Password is required" :
          event.target.value !== userForm.password
          ? "Confirm Password must match Password" 
          :null
      })
  }

  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userForm);
}


  return (
      <div className="l-from">
        <form action="" className="form" onSubmit={handleFormSubmit}>
          <h1 className="form_title">Register</h1>
          {/* Name */}
          <div>
            <div className="form_div">
              <input
                type="text"
                className={`form_input ${userFormErrs.emailErr ? "border-danger" : ""}`}
                placeholder=" "
                id="name"
                value={userForm.name}
                onChange={handleFormChange}
              />
              <label htmlFor="" className="form_label">
                Name
              </label>
            </div>
            <div id="emailHelp" className="form-text text-danger mb-2">
              {userFormErrs.nameErr}
            </div>
          </div>

          {/* Email */}

          <div>
            <div className="form_div">
              <input
                type="text"
                className={`form_input ${userFormErrs.emailErr ? "border-danger" : ""}`}
                placeholder=" "
                id="email"
                value={userForm.email}
                onChange={handleFormChange}
              />
              <label htmlFor="" className="form_label">
                Email
              </label>
            </div>
            <div id="emailHelp" className="form-text text-danger mb-2">
              {userFormErrs.emailErr}
            </div>
          </div>

          {/* User Name */}
          <div>
            <div className="form_div">
              <input
                type="text"
                className={`form_input ${userFormErrs.emailErr ? "border-danger" : ""}`}
                placeholder=" "
                id="username"
                value={userForm.username}
                onChange={handleFormChange}
              />
              <label htmlFor="" className="form_label">
                User Name
              </label>
            </div>
            <div id="emailHelp" className="form-text text-danger mb-2">
              {userFormErrs.usernameErr}
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="form_div">
              <input
                type="password"
                className={`form_input ${userFormErrs.emailErr ? "border-danger" : ""}`}
                placeholder=" "
                id="password"
                value={userForm.password}
                onChange={handleFormChange}
              />
              <label htmlFor="" className="form_label">
                Password
              </label>
            </div>
            <div id="passHelp" className="form-error text-danger mb-2">
              {userFormErrs.passwordErr}
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <div className="form_div">
              <input
                type="password"
                className={`form_input ${userFormErrs.emailErr ? "border-danger" : ""}`}
                placeholder=" "
                id="confirmPassword"
                value={userForm.confirmPassword}
                onChange={handleFormChange}
              />
              <label htmlFor="" className="form_label">
                Confirm Password
              </label>
            </div>
            <div id="passHelp" className="form-error text-danger mb-2">
              {userFormErrs.confirmPasswordErr}
            </div>
          </div>

          <div className="btns">
            <input type="submit" className="form_button" value="Register" />
          </div>
        </form>
      </div>
  );
}

export default Register;
