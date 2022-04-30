import React from 'react'
import {useState} from 'react'
import './Login.css'

function Login() {

    const [userForm, setUserForm] = useState({
        email: '',
        password: ''
    });

    const [userFormErrs, setUserFormErrs] = useState({
        emailErr: null,
        passwordErr: null,
    });

    const handleFormChange = (event) => {

        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(event.target.id === 'email'){
            setUserForm({
                ...userForm,
                email: event.target.value
            });

            setUserFormErrs({
                ...userFormErrs,
                emailErr:
                event.target.value.lenght === 0
                ? "Username is required" :
                regex.test(event.target.value) ===false
                ?"Invalid email" 
                :null
            });

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
                ? "Password must be at least 8 characters long" 
                :null
            })
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            !userFormErrs.emailErr &&
            !userFormErrs.passwordErr 
          )
        console.log(userForm);
    }
    
    return (
    <div className="l-from">
        <form action="" className="form" onSubmit={handleFormSubmit}>
            <h1 className="form_title">Sign In</h1>   
            <div>
            <div className="form_div">
                <input 
                type="text" 
                className={`form_input ${userFormErrs.emailErr ? "border-danger" : ""}`}
                placeholder=" "
                id='email'
                value={userForm.email}
                onChange={handleFormChange}/>
                <label htmlFor="" className="form_label">Email</label>
            </div>    
            <div id="emailHelp" className="form-text text-danger mb-2">
                   {userFormErrs.emailErr}
            </div>
            </div>
           
           <div>
           <div className="form_div">
                <input
                type="password" 
                className={`form_input ${userFormErrs.emailErr ? "border-danger" : ""}`}
                placeholder=" "
                id='password'
                value={userForm.password}
                onChange={handleFormChange}
                />
                <label htmlFor="" className="form_label">Password</label>
            </div>   
            <div id="passHelp" className="form-error text-danger mb-2">
                    {userFormErrs.passwordErr}
            </div> 
           </div>
           
            <div className='btns'>
            
            <input type="submit" className="form_button" value="Sign In"/>
            </div>
        </form>
    </div>
  )
}

export default Login