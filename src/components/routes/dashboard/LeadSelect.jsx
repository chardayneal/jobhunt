import { useState } from "react";
import propTypes from "prop-types";
import DisplayLead from "./DisplayLead";
import { Button } from "@mui/material";
import Lead from "./Lead";


const LeadSelect = ({lead}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }
  return (
    <div>
      <div key={lead.id} className="user-lead-item">
          <Lead key={lead.id} leadInfo={lead} />
          <div className="hover-overlay">
              <Button  variant="contained">Quick Update</Button>
              <Button onClick={() => setIsOpen(true)} variant="outlined">View Lead</Button>
              <DisplayLead lead={lead} isOpen={isOpen} handleClose={handleClose} />
            </div>
        </div>
    </div>
  )
}

LeadSelect.propTypes = {
  lead: propTypes.object.isRequired
};


export default LeadSelect
