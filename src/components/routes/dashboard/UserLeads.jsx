import { useEffect, useState } from 'react';
import LeadHeader from './LeadHeader';
import LeadList from './LeadList';


import './UserLeads.css';
import { getLeadsByUserId } from '../../../apiUtilities/backendAPI';

const UserLeads = () => {
  const [leads, setLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getLeadsByUserId(userId)
      .then((leads) => {
        setLeads(leads);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [leads]);

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
    const filteredLeads = filterLeads(e.target.value, leads);
      setLeads(filteredLeads);
  };


  return (
    <div className="dash-item dash-card lead-grid user-leads">
      <LeadHeader searchQuery={searchQuery} handleQueryChange={handleQueryChange}/>
      <LeadList leads={leads}/>
    </div>
  )
}

const filterLeads = (query, leads) => {
  return leads.filter(lead => {
    if (lead.title.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else if (lead.company.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else if (lead.location.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else if (lead.description.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
  });
}



export default UserLeads;