import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getUserByToken } from '../../../apiUtilities/backendAPI';
import Event from './Event';
import UserLeads from './UserLeads';

import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    leads: [],
    tasks: []
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      getUserByToken(token)
        .then((user) => {
          setUser(user);
        })
        .catch((error) => {
          console.error(error);
          localStorage.removeItem('userToken');
          navigate('/login');
        });
    }
  }, [navigate]);

  return (
    <div className="grid-item flex-area">
      <div className="dash-grid">
        <UserLeads userLeads={user.leads} />
        <Event userTasks={user.tasks} />
      </div>
    </div>
  )
}

export default Dashboard