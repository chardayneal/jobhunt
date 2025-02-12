import { useEffect, useState } from 'react';
import LeadHeader from './LeadHeader';
import LeadList from './LeadList';
import { getLeadsByUserId } from '../../../apiUtilities/backendAPI';
import './UserLeads.css';

const UserLeads = () => {
  const [leads, setLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLeads, setFilteredLeads] = useState([]);

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
      setFilteredLeads(filteredLeads);
  };


  return (
    <div className="dash-item dash-card lead-grid user-leads">
      <LeadHeader searchQuery={searchQuery} handleQueryChange={handleQueryChange}/>
      <LeadList leads={searchQuery ? filteredLeads : leads}/>
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
    }
  });
}



export default UserLeads;