import {LEADS} from '../../../staticData/staticLeads';
import Lead from '../dashboard/Lead';
import TimelineView from './TimelineView';

const TimelinePanel = () => {
  return (
    <section className="dash-card insight-grid-item timeline-panel">
       <div className="lead-scroll-list timeline-col">
        {LEADS.map((lead) => (
          <Lead key={lead.id} leadInfo={lead} />
        ))}
       </div>
       <TimelineView/>
    </section>
  )
}

export default TimelinePanel;
