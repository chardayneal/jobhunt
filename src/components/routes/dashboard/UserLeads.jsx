import { useEffect, useState } from 'react';
import { LEADS } from '../../../staticData/staticLeads';
import LeadHeader from './LeadHeader';
import LeadList from './LeadList';


import './UserLeads.css';

const UserLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    setLeads(LEADS);
  }, []);

  return (
    <div className="dash-item lead-grid user-leads">
      <LeadHeader/>
      <LeadList leads={leads}/>
    </div>
  )
}

export default UserLeads