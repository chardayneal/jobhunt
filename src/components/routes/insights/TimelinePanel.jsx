import { useState, useEffect } from 'react';
import Lead from '../dashboard/Lead';
import TimelineView from './TimelineView';
import { formatHistoryData, getLeadsByUserId } from '../../../apiUtilities/backendAPI';
import { ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';

const TimelinePanel = () => {
  const [leads, setLeads] = useState([]);
  const [history, setHistory] = useState([]);

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
    const leadHistory = leads.filter((lead) => lead.id === leadId)[0].historyList;
    console.log(leadHistory);
    setHistory(leadHistory.map((plot) => formatHistoryData(plot)));
  };


  return (
    <section className="dash-card insight-grid-item timeline-panel">
       <div className="lead-scroll-list timeline-col">
        {leads.map((lead) => (
          <div key={lead.id}>
            <ListItem
            key={lead.id}
            onClick={() => fetchLeadHistory(lead.id)}
            className="lead-btn"
            variant="contained"
          >
            <Lead leadInfo={lead} />
          </ListItem>
          <Divider variant="middle" />
          </div>
        ))}
       </div>
       <TimelineView history={history}/>
    </section>
  )
}

export default TimelinePanel;
