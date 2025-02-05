import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getUserByToken } from '../../../apiUtilities/backendAPI';
import Event from './Event';
import UserLeads from './UserLeads';

import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('usesrToken');
    if (token) {
      getUserByToken(token)
        .then((user) => {
          console.log(user);
          setUser(user);
        })
        .catch((error) => {
          console.error(error);
          localStorage.removeItem('userToken');
          navigate('/login');
        });
    }
  }, [navigate])

  return (
    <div className="grid-item flex-area">
      <div className="dash-grid">
        <UserLeads />
        <Event />
      </div>
    </div>
  )
}

export default Dashboard