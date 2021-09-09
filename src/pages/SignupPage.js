import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/action/authAction";
import { Link } from "react-router-dom";
import "./LoginPage.css";


function SignupPage() {
  const dispatch = useDispatch();
  // const [userData, setUserData] = useState({})
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
 
  const handleFormData = (e) => {
    e.preventDefault();
    let newUserData = { email, phone, password, confirmPass };
    // setUserData((d)=>{ return {...d, ...newUserData} })
    addUser(newUserData);
  };
  const addUser = (newUserData) => {
    dispatch(createUser(newUserData));
  };

  return (
    <div className="signupPage">
      <h2 className="Heading">Sign in</h2>
    <br />
      <form>
        <div className="inputfields">
          <div>
          
            <input
              type="email"
              placeholder="Email"
              label="Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
         
            <input
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          {/* <br /> */}
          <div>
          <button onClick={handleFormData} className="loginBtn">
            Create Account
          </button>
          </div>
          <span>
            <p className="forget2">
              <Link to="/">Already Have an account?</Link>
            </p>
          </span>
        </div>
      </form>
     <br />
    </div>
  );
}

export default SignupPage;
