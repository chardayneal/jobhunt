import { useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import NewLeadForm from '../../NewLeadForm';


const DisplayLead = ({ lead, isOpen, handleClose }) => {
  const [leadData, setLeadData] = useState({...lead});

  const handleLeadUpdate = (event) => {
      const { name, value } = event.target;
      setLeadData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
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
          <NewLeadForm leadData={leadData} handleLeadDataChange={handleLeadUpdate}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save Changes</Button>
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
