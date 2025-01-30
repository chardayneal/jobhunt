import { useState } from "react";
import propTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


const MuseList = ({ leadResults, handleMuseLeadClick }) => {
  const [selectedLeadId, setSelectedLeadId] = useState(null);

  const selectedClassName = 'muse-lead selected';

  const handleLeadSelection = (lead) => {
    
    if (selectedLeadId != null) {
      const element = document.getElementById(`museLead${selectedLeadId}`);
      element.classList.remove('selected'); 
    }

    handleMuseLeadClick(lead.museId);
    setSelectedLeadId(lead.id);
  }

  const museLeads = leadResults.map((lead) => {
    return (
      <div id={`museLead${lead.id}`} className={selectedLeadId === lead.id ? selectedClassName : 'muse-lead'} key={uuidv4()}>
        <div className="lead-body">
          <h3>{lead.name}</h3>
          <div className="muse-subtext">
            <p className="lead-company">{lead.company}</p>
            <p className="lead-location">{lead.location}</p>
          </div>
          <div className="hover-overlay">
            <Button variant="contained" startIcon={<StarIcon/>}>Add to Leads</Button>
            <Button onClick={() => handleLeadSelection(lead)}  variant="outlined">View Lead</Button>
          </div>
        </div>
      </div>
    )
  });
  
  return (
    <div>
      {museLeads}
    </div>
  )
}

MuseList.propTypes = {
  leadResults: propTypes.array,
  handleMuseLeadClick: propTypes.func
};

export default MuseList
