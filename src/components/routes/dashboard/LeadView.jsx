import { useState } from 'react';
import propTypes from 'prop-types';
import NewLeadForm from '../../NewLeadForm';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { addNewLead } from '../../../apiUtilities/backendAPI';

const INITIAL_STATE = {
  title: '',
  company: '',
  level: '',
  description: '',
  location: '',
  status: 'Interested',
  jobURL: ''
};

const LeadView = ({ isOpen, handleClose }) => {
  const [leadData, setLeadData] = useState(INITIAL_STATE);

  const handleLeadDataChange = (event) => {
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
    addNewLead(userId, leadData)
      .then((newLead) => {
        console.log("New lead added:",newLead);
        setLeadData(INITIAL_STATE);
        handleClose();
      })
      .catch((err) => console.log(err));
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
          <h2>New Lead Details</h2>
          <p>Enter the lead details below</p>
          <NewLeadForm leadData={leadData} handleLeadDataChange={handleLeadDataChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create New Lead</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

LeadView.propTypes = {
  isOpen: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired
}

export default LeadView;
