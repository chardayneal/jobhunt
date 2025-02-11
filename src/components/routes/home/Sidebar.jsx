import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InsightsIcon from '@mui/icons-material/Insights';
import lightLogo from '../../../assets/jobHuntLight.svg';
import './Sidebar.css';

const Sidebar = () => {

  return (
    <div className="grid-item sidebar">
      <div className="logo"> <img src={lightLogo} alt="jobHunt logo"  /></div>
      <nav>
        <NavLink 
          to="/dashboard" 
          className="link-comp"
          end
          >
          <div className="sidebar-link">
            <HomeIcon/>
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/search" className="link-comp" end>
          <div className="sidebar-link">
            <ManageSearchIcon/>
            <p>Search</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/insights" className="link-comp" end>
          <div className="sidebar-link">
            <InsightsIcon/>
            <p>Insights</p>
          </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
