import propTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import './Home.css';

const Home = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    return navigate('/');
  }


  return (
    <div className="home grid-container">
        <Sidebar/>
        <div className="grid-item header">
          <h1>jobHunt</h1>
          <p>Hello, User!</p>
          <IconButton onClick={handleLogout} aria-label="log out" size="large" className="logout" >
            <LogoutIcon /> <p>Logout</p>
          </IconButton>
        </div>
        <Outlet></Outlet>
      </div>
  )
}

Home.propTypes = {
  setAuth: propTypes.func.isRequired,
};

export default Home