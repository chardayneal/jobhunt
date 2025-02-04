import { useState } from "react";
import propTypes from "prop-types";
import { Link, useNavigate } from "react-router";
import { createUser } from "../../../apiUtilities/backendAPI";
import './LogIn.css';

const SignUp = ({ setAuth }) => {
  const navigate = useNavigate();
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
        localStorage.setItem('userToken', user.token);
        setAuth(true);
        return navigate('/dashboard');
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

SignUp.propTypes = {
  setAuth: propTypes.func.isRequired,
};

export default SignUp
