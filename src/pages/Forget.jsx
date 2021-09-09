import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { auth } from '../configs/firebase';
import "./LoginPage.css";


export default function Forget() {
  const [email, setemail] = useState("");
  const changePAss =()=> {
  
  auth.sendPasswordResetEmail(email)
  .then(() => {
    alert("Check your mail box")
   
  })
  .catch((error) => {
    alert(error.message)
    
  });
}
    return (
        <div className="loginpage">
        <h2 className="Heading">Forget </h2>
        <br></br>
        <form>
          <div className="inputfields">
            <div>
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          
            <button 
             className="loginBtn" onClick={changePAss}>
              <Link to="/todos">Reset Password</Link>
         </button>
          
            <button 
             className="loginBtn" onClick={changePAss}>
              <Link to="/todos">Go to Login</Link>
         </button>
              <span className="additional-links">
            <p className="forget">
              <Link to="/signup">Create New Account</Link>
            </p>
            <p className="forget">
              <Link to="/">Login</Link>
            </p>
            </span>
            <br></br>
          </div>
        </form>
      </div>
    )
}
