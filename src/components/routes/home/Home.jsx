import { useEffect} from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import './Home.css';
import { getUserByToken } from '../../../apiUtilities/backendAPI';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    getUserByToken(token)
      .then(() => {
        return
      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
    if (!token) {
      navigate("/login");
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    navigate("/login");
  };

  return (
    <div className="home grid-container">
        <Sidebar/>
        <div className="grid-item header">
          <div className="spacer"></div>
          <h2>Hello!</h2>
          <IconButton onClick={handleLogout} aria-label="log out" size="large" className="logout" >
            <LogoutIcon /> <p>Logout</p>
          </IconButton>
        </div>
        <Outlet></Outlet>
      </div>
  )
}

export default Home