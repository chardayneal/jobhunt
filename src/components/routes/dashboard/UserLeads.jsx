import { useEffect, useState } from 'react';
import { LEADS } from '../../../staticData/staticLeads';
import LeadHeader from './LeadHeader';
import LeadList from './LeadList';


import './UserLeads.css';

const UserLeads = () => {
  const [leads, setLeads] = useState(LEADS);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      const filteredLeads = filterLeads(searchQuery, LEADS);
      setLeads(filteredLeads);
    } else {
      setLeads(LEADS);
    }
  }, [searchQuery]);

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
    // filterLeads(e.target.value);
  };


  return (
    <div className="dash-item lead-grid user-leads">
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