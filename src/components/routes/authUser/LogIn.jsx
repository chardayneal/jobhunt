import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import './Login.css';
import { loginUser } from '../../../apiUtilities/backendAPI';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (token) {
      navigate("/dashboard");
    }
  });


  const handleLogin = (e) => {
    e.preventDefault();

    loginUser({ email })
    .then(user => {
      localStorage.setItem('userToken', user.token);
      localStorage.setItem('userId', user.id);
      return navigate('/dashboard');
    })
    .catch(err =>  console.log(err));
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


export default LogIn
