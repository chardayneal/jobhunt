import { useState } from "react";
import { Link } from "react-router";

import './LogIn.css';
import { createUser } from "../../../apiUtilities/backendAPI";

const SignUp = () => {
  const [newUser, setNewUser] = useState({userName: '', email: '', password: ''});

  const handleInputChange = (e) => {
    setNewUser({...newUser, [e.target.id]: e.target.value});
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const obj = { name: newUser.userName, email: newUser.email};
    console.log(obj);

    createUser(obj)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
      <div className="auth">
      <img className="logo" src='src/assets/logoDark.svg' alt='jobHuntlogo'/>
      <div className="auth-col auth-container">
        <div className="auth-text">
          <h1>Create an account</h1>
          <span>Please enter your details to get started</span>
          <form onSubmit={handleSignUp}>
          <div className="form-control">
              <label htmlFor="name">Name</label>
                <input
                type="text"
                id="userName"
                value={newUser.userName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email address</label>
                <input
                type="email"
                id="email"
                value={newUser.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                autoComplete='off'
                type="password"
                id="password"
                value={newUser.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button onClick={handleSignUp} type="submit">Sign Up</button>
          </form>
          <span>Already have an account? <Link to='/login'>Sign in here</Link></span>
        </div>
      </div>
      <div className="auth-col auth-img">
        <img src="src/assets/loginImg.png" alt="graphic of woman at desk with laptop" />
      </div>
    </div>
  )
}

export default SignUp
