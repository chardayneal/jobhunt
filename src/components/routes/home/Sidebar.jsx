import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InsightsIcon from '@mui/icons-material/Insights';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="grid-item sidebar">
      <nav>
        <Link to="/dashboard">{<HomeIcon/>}</Link>
        <Link to="/dashboard/search">{<ManageSearchIcon/>}</Link>
        <Link to="/dashboard/insights">{<InsightsIcon/>}</Link>
      </nav>
    </div>
  )
}

export default Sidebar
