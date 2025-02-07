import { useEffect, useState } from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import { getLeadsByUserId, getTasksByUserId } from '../../../apiUtilities/backendAPI';
import { calculateApplied, calculateInterviews, calculateOffered, calculateTasks } from '../../../apiUtilities/calculateStats';

const StatBox = () => {
  const [leads, setLeads] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getLeadsByUserId(userId)
      .then((data) => {
        setLeads(data);
      })
      .catch((error) => {
        console.error(error);
      });

    getTasksByUserId(userId)
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);

    
  
  return (
    <div className="insight-grid-item stats-box">
        <div className="dash-card stat-col lead-total">
          <h2>{leads.length}</h2>
          <p>LEADS TOTAL</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge 
            innerRadius="90%" 
            outerRadius="120%" 
            height={100} 
            value={`${calculateInterviews(leads)}%`} 
            startAngle={-120} 
            endAngle={120} 
            />
            <p className="gauge-title">INTERVIEWED</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge innerRadius="90%" outerRadius="120%" height={100} value={`${calculateOffered(leads)}%`} startAngle={-120} endAngle={120} />
          <p className="gauge-title">OFFERED</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge innerRadius="90%" outerRadius="120%" height={100} value={`${calculateApplied(leads)}%`} startAngle={-120} endAngle={120} />
          <p className="gauge-title">UNDER REVIEW</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge innerRadius="90%" outerRadius="120%" height={100} value={`${calculateTasks(tasks)}%`} startAngle={-120} endAngle={120} />
          <p className="gauge-title">TASKS COMPLETION</p>
        </div>
        
    </div>
  )
}

export default StatBox
