import propTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';

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
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
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
  )
}

LogIn.propTypes = {
  setAuth: propTypes.func.isRequired,
};

export default LogIn
