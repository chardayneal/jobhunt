import {LEADS} from '../../../staticData/staticLeads';
import Lead from '../dashboard/Lead';

const TimelineView = () => {
  return (
    <section className="insight-grid-item timeline-panel">
       <div className="lead-scroll-list timeline-col">
        {LEADS.map((lead) => (
          <Lead key={lead.id} leadInfo={lead} />
        ))}
       </div>
       <div className="timeline-view timeline-col"></div> 
    </section>
  )
}

export default TimelineView
