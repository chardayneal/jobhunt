import TimelineView from './TimelinePanel';
import Statbox from './StatBox';
import './Insights.css';
import InsightPanel from './InsightPanel';

const Insights = () => {
    return (
      <div className="grid-item flex-area insight-grid">
        <Statbox/>
        <TimelineView/>
        <InsightPanel/>
      </div>
    )
  }
  
export default Insights;