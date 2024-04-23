import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../../features/userSlice";

const Login = () => {
  
    const dispatch = useDispatch();

    const [username,setUsername] = useState("");
    const [email ,setEmail] = useState("");
    const [isLoggedIn ,setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:username,
            email:email,
            is_logged_in:isLoggedIn,
        }))

    };


  return (
    <div className="login">
      <div className="login_left"></div>

      <div className="login_right">
        <h1>Login</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faUser} />
          </div>
         
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faLock} />
          </div>
          <button type="submit" onClick={() => setIsLoggedIn(true)}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
