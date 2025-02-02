import TimelineView from './TimelinePanel';
import './Insights.css';

const Insights = () => {
    return (
      <div className="grid-item flex-area insight-grid">
        <div className="insight-grid-item stats-box"></div>
        <TimelineView/>
        <div className="insight-grid-item insight-view"></div>
      </div>
    )
  }
  
export default Insights