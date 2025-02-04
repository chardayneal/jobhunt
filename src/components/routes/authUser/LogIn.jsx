import propTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import './Login.css';

const LogIn = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    const obj = { email, password};

    // make call to back in to verify user credentials
    setAuth(true);
    console.log(obj);
    // set current user to user in local storage
    return navigate('/dashboard');
  }

  return (
    <div className="auth">
      <img className="logo" src='src/assets/logoDark.svg' alt='jobHuntlogo'/>
      <div className="auth-col auth-container">
        <div className="auth-text">
          <h1>Welcome back</h1>
          <span>Please enter your details to sign in</span>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label htmlFor="email">Email address</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                autoComplete='off'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <span>Don&apos;t have an account? <Link to='/signup'>Sign up here</Link></span>
        </div>
      </div>
      <div className="auth-col auth-img">
        <img src="src/assets/loginImg.png" alt="graphic of woman at desk with laptop" />
      </div>
    </div>
  )
}

LogIn.propTypes = {
  setAuth: propTypes.func.isRequired,
};

export default LogIn
