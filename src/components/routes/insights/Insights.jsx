import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TimelinePanel from './TimelinePanel';
import Statbox from './StatBox';
import InsightPanel from './InsightPanel';
import './Insights.css';

const Insights = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      console.log("User token and id found in local storage");
      } else {
        localStorage.removeItem('userId');
        localStorage.removeItem('userToken');
        navigate('/login');
      }
    }, [navigate]);

    return (
      <div className="grid-item flex-area insight-grid">
        <Statbox/>
        <TimelinePanel/>
        <InsightPanel/>
      </div>
    )
  }
  
export default Insights;