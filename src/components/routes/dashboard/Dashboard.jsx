import Event from './Event';
import UserLeads from './UserLeads';
import './Dashboard.css';


const Dashboard = () => {

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