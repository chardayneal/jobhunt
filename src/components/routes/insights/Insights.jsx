import TimelineView from './TimelinePanel';
import Statbox from './StatBox';
import './Insights.css';

const Insights = () => {
    return (
      <div className="grid-item flex-area insight-grid">
        <Statbox/>
        <TimelineView/>
        <div className="insight-grid-item insight-view"></div>
      </div>
    )
  }
  
export default Insights