import { useState } from "react";
import propTypes from "prop-types";
import DisplayLead from "./DisplayLead";
import { Button } from "@mui/material";
import Lead from "./Lead";
import UpdateForm from "./UpdateForm";


const LeadSelect = ({lead}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const leadColor = `user-lead-item ${lead.status === 'Not Selected' ? 'NotSelected': lead.status}`;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleUpdateClose = () => {
    setIsUpdateOpen(false);
  };

  return (
    <div className="lead-select">
      <div key={lead.id} className={leadColor}>
          <Lead key={lead.id} leadInfo={lead} />
          <div className="hover-overlay">
              <Button 
                onClick={() => setIsUpdateOpen(true)} 
                variant="contained"
                sx={{ backgroundColor: 'var(--primary-light-color)', textTransform: 'capitalize' }}
              >
                Update
              </Button>
              <UpdateForm lead={lead} isOpen={isUpdateOpen} handleClose={handleUpdateClose} />
              <Button 
                onClick={() => setIsOpen(true)} 
                variant="outlined"
                sx={{ color: 'var(--primary-light-color)', borderColor: 'var(--primary-light-color)', textTransform: 'capitalize' }}
              >
                 View
              </Button>
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
