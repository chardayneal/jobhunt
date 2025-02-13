import { useEffect, useState } from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import { getLeadsByUserId, getTasksByUserId } from '../../../apiUtilities/backendAPI';
import { calculateStat } from '../../../apiUtilities/calculateStats';

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
          <p>LEADS <br/> TOTAL</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge 
            innerRadius="90%" 
            outerRadius="120%" 
            height={75} 
            value={`${calculateStat(leads, 'interviews')}%`} 
            startAngle={-120} 
            endAngle={120} 
            sx={{
              fontSize: '2.75rem',
              fontWeight: '800', 
            }}
            />
            <p className="gauge-title">INTERVIEWED</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge 
            innerRadius="90%" 
            outerRadius="120%" 
            height={75} 
            value={`${calculateStat(leads, 'offered')}%`} 
            startAngle={-120} 
            endAngle={120} 
            sx={{
              fontSize: '2.75rem',
              fontWeight: '800',
            }}  
          />
          <p className="gauge-title">OFFERED</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge 
            innerRadius="90%" 
            outerRadius="120%" 
            height={75} 
            value={`${calculateStat(leads, 'applied')}%`} 
            startAngle={-120} 
            endAngle={120} 
            sx={{
              fontSize: '2.75rem',
              fontWeight: '800',
              
            }}
          />
          <p className="gauge-title">UNDER REVIEW</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge 
            innerRadius="90%" 
            outerRadius="120%" 
            height={75} 
            value={`${calculateStat(tasks, 'tasks')}%`} 
            startAngle={-120} 
            endAngle={120} 
            sx={{
              fontSize: '2.75rem',
              fontWeight: '800',
              
            }}
          />
          <p className="gauge-title">TASKS COMPLETION</p>
        </div>
        
    </div>
  )
}

export default StatBox
