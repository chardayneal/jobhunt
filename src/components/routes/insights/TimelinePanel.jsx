import { useState, useEffect } from 'react';
import Lead from '../dashboard/Lead';
import TimelineView from './TimelineView';
import { formatHistoryData, getLeadsByUserId } from '../../../apiUtilities/backendAPI';
import { ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';

const TimelinePanel = () => {
  const [leads, setLeads] = useState([]);
  const [history, setHistory] = useState([]);
  const [isLeadSelected, setIsLeadSelected] = useState(false);
  const [selectedLead, setSelectedLead] = useState({ selected: false, id: 0})

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getLeadsByUserId(userId)
      .then((data) => {
        setLeads(data);
      })
      .catch((error) => {
        console.error('Error fetching leads:', error);
      });
  }, []);

  const fetchLeadHistory = (leadId) => {
    console.log(leadId);
    setSelectedLead({ selected: true, id: leadId });
    const leadHistory = leads.filter((lead) => lead.id === leadId)[0].historyList;
    console.log(leadHistory);
    setHistory(leadHistory.map((plot) => formatHistoryData(plot)));
    setIsLeadSelected(true);
  };


  return (
    <section className="dash-card insight-grid-item timeline-panel">
       <div className="lead-scroll-list timeline-col">
        {leads.map((lead) => (
          <div key={lead.id} className='timeline-lead'>
            <ListItem
            key={lead.id}
            onClick={() => fetchLeadHistory(lead.id)}
            className={`lead-btn ` + (selectedLead.selected && selectedLead.id === lead.id ? 'selected' : '')}
            variant="contained"
          >
            <Lead leadInfo={lead} />
          </ListItem>
          <Divider variant="middle" />
          </div>
        ))}
       </div>
       {isLeadSelected ? <TimelineView history={history}/> : <div className='no-display'><p>Select Lead to View Progress</p></div>}
    </section>
  )
}

export default TimelinePanel;
