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
          handleNewUser(user);
        })
        .catch((error) => {
          console.error(error);
          localStorage.removeItem('userToken');
          navigate('/login');
        });
    }
  }, [navigate]);


  const handleNewUser = (user) => {
    setUser(user);
  };

  const updateUserTasks = (newTasks) => {
    console.log(user.tasks);
    setUser(prevUser => {
      return {...prevUser, tasks: prevUser.tasks.map( task => {
        if (task.id === newTasks.id) {
          return newTasks;
        } else {
          return task;
        }
      })
    }
    });
    console.log("Tasks were updated");
  };

  const addNewUserTask = (task) => {
    console.log("Task was added");
    setUser((prevUser) => ({
        ...prevUser,
        tasks: [...prevUser.tasks, task],
      }));
  }


  return (
    <div className="grid-item flex-area">
      <div className="dash-grid">
        <UserLeads userLeads={user.leads} />
        <Event userId={user.id} userTasks={user.tasks} addNewUserTask={addNewUserTask} updateUserTasks={updateUserTasks} />
      </div>
    </div>
  )
}

export default Dashboard