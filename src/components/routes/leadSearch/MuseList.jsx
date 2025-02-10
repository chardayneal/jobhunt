import { useState } from "react";
import propTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import Lead from "../dashboard/Lead";
import { addNewLead } from "../../../apiUtilities/backendAPI";



const MuseList = ({userId, leadResults, handleMuseLeadClick }) => {
  const [selectedLeadId, setSelectedLeadId] = useState(null);
  const selectedClassName = 'muse-lead selected';

  const handleLeadSelection = (lead) => {

    handleMuseLeadClick(lead.museId);
    setSelectedLeadId(lead.id);
  }

  const handleAddToLeads = (lead) => {
    delete lead.id;
    delete lead.museId;
    lead.status = 'Interested';
    addNewLead(userId, lead)
      .then(() => {
        return
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const museLeads = leadResults.map((lead) => {
    return (
      <div key={uuidv4()} className="muse-lead-container">
        <div id={`museLead${lead.id}`} className={selectedLeadId === lead.id ? selectedClassName : 'muse-lead'}>
          <div className="lead-body">
            <Lead leadInfo={{ title: lead.title, company: lead.company, location: lead.location}} />
            <div className="hover-overlay">
              <Button onClick={() => handleAddToLeads(lead)} variant="contained" startIcon={<StarIcon/>}>Add to Leads</Button>
              <Button onClick={() => handleLeadSelection(lead)}  variant="outlined">View Lead</Button>
            </div>
          </div>
        </div>
        <Divider variant="middle" />
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
  userId: propTypes.string,
  leadResults: propTypes.array,
  handleMuseLeadClick: propTypes.func
};

export default MuseList
