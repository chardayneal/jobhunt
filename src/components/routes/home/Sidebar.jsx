import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InsightsIcon from '@mui/icons-material/Insights';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="grid-item sidebar">
      <nav>
        <Link to="/">{<HomeIcon/>}</Link>
        <Link to="/search">{<ManageSearchIcon/>}</Link>
        <Link to="/insights">{<InsightsIcon/>}</Link>
      </nav>
    </div>
  )
}

export default Sidebar
