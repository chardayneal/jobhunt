
import { Gauge } from '@mui/x-charts/Gauge';

const StatBox = () => {
  return (
    <div className="insight-grid-item stats-box">
        <div className="dash-card stat-col lead-total">
          <h2>63</h2>
          <p>LEADS TOTAL</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge 
            innerRadius="90%" 
            outerRadius="120%" 
            height={100} 
            value={34} 
            startAngle={-120} 
            endAngle={120} 
            />
            <p className="gauge-title">INTERVIEWED</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge innerRadius="90%" outerRadius="120%" height={100} value={40} startAngle={-120} endAngle={120} />
          <p className="gauge-title">OFFERED</p>
        </div>
        <div className="dash-card stat-col">
          <Gauge innerRadius="90%" outerRadius="120%" height={100} value={28} startAngle={-120} endAngle={120} />
          <p className="gauge-title">REVIEWING</p>
        </div>
        
    </div>
  )
}

export default StatBox
