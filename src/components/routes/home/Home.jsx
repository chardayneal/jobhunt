import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import './Home.css';

const Home = () => {
  return (
    <div className="home grid-container">
        <Sidebar/>
        <div className="grid-item header">
          <h1>jobHunt</h1>
          <p>Hello, User!</p>
          <IconButton aria-label="log out" size="large" className="logout" >
            <LogoutIcon /> <p>Logout</p>
          </IconButton>
        </div>
        <Outlet></Outlet>
      </div>
  )
}

export default Home