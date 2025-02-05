import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import LeadHeader from './LeadHeader';
import LeadList from './LeadList';


import './UserLeads.css';

const UserLeads = ({ userLeads }) => {
  const [leads, setLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      const filteredLeads = filterLeads(searchQuery, userLeads);
      setLeads(filteredLeads);
    } else {
      setLeads(userLeads);
    }
  }, [userLeads, searchQuery]);

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
    // filterLeads(e.target.value);
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

UserLeads.propTypes = {
  userLeads: propTypes.array,
};



export default UserLeads;