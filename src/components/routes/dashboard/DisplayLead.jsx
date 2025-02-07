import { useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import NewLeadForm from '../../NewLeadForm';
import ShowSelectedLead from './ShowSelectedLead';


const DisplayLead = ({ lead, isOpen, handleClose }) => {
  const [leadData, setLeadData] = useState({...lead});
  const [isEditing, setIsEditing] = useState(false);

  const handleLeadUpdate = (event) => {
      const { name, value } = event.target;
      setLeadData((prevState) => ({
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
    console.log("New lead created", leadData);
    const userId = localStorage.getItem('userId');
    // create an object with non null values
    const nonNullValues = Object.fromEntries(Object.entries(leadData).filter(([key, value]) => value !== null));
    console.log(userId, nonNullValues);
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
          {isEditing ? 
          <NewLeadForm leadData={leadData} handleLeadDataChange={handleLeadUpdate}/> :
          <ShowSelectedLead lead={leadData} />}
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
