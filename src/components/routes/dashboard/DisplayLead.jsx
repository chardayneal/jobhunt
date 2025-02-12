import { useState } from 'react';
import propTypes from 'prop-types';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import NewLeadForm from '../../NewLeadForm';
import ShowSelectedLead from './ShowSelectedLead';
import { updateLeadInfo} from '../../../apiUtilities/backendAPI';


const DisplayLead = ({ lead, isOpen, handleClose }) => {
  const [updatedLead, setUpdatedLead] = useState(lead);
  const [isEditing, setIsEditing] = useState(false);

  const handleLeadUpdate = (event) => {
      const { name, value } = event.target;
      setUpdatedLead((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };

  const handleLeadClose = () => {
    setIsEditing(false);
    handleClose();
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);

    const requestBody = {};
    for (const [key, value] of Object.entries(updatedLead)) {
      if (value !== lead[key]) {
        requestBody[key] = value;
      }
    }
    
    updateLeadInfo(lead.id, requestBody)
      .then(() => {
        handleLeadClose();
      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: handleSubmit
            }
          }}
      >
        <DialogContent>
          <h2>Lead Details</h2>
          <Divider sx={{ margin: '.5rem 0 .75rem'}} />
          {isEditing ? 
          <NewLeadForm leadData={updatedLead} handleLeadDataChange={handleLeadUpdate}/> :
          <ShowSelectedLead lead={updatedLead} handleLeadClose={handleLeadClose} />}
        </DialogContent>
        <DialogActions>
          {isEditing ? 
          <div> 
            <Button onClick={handleLeadClose}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </div> :
          <div>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={handleLeadClose}>Close</Button>  
          </div>}
        </DialogActions>
      </Dialog>
    </div>
  )
}

DisplayLead.propTypes = {
  lead: propTypes.object,
  isOpen: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired
};

export default DisplayLead;
