import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { checkUser, doLogin } from "../redux/action/authAction";
import "./LoginPage.css";
import { auth } from "../configs/firebase";
import { Link } from "react-router-dom";


function LoginPage() {
	const dispatch = useDispatch();
  useEffect(() => {
    // const auth = getAuth();
    async function check() {
      auth.onAuthStateChanged((someUser) => {
        if (someUser) {
          dispatch(checkUser(someUser));
        } else {
          console.log("User not found");
        }
      });
    }
    check();
  }, [dispatch]);

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormData = (e) => {
    e.preventDefault();
    let newUserData = { email, password };
    dispatch(doLogin(newUserData));
  };
  return (
    <div className="loginpage">
      <h2 className="Heading">Login</h2>
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
          <div>
          

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <div class="hint"><div class=""><u>User Login Details</u></div><div class="row"><div class="col-12">Email: noman.i@yahoo.com</div><div class="col-12">Password: 12345678</div></div></div>
          <button onClick={handleFormData} className="loginBtn">
            <Link to="/todos">Login</Link>
       </button>
            <span className="additional-links">
          <p className="forget">
            <Link to="/signup">Create Account</Link>
          </p>
          <p className="forget">
            <Link to="/forget">forget password?</Link>
          </p>
          </span>
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
