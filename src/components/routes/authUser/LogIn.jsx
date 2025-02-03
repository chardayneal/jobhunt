import propTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';
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
    <div className="login">
      <div className="logo">jobHunt</div>
      <div className="login-col login-container">
        <div className="login-text">
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
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <div className="login-col login-img"></div>
    </div>
  )
}

LogIn.propTypes = {
  setAuth: propTypes.func.isRequired,
};

export default LogIn
