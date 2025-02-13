import { useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { updateLeadStatus } from '../../../apiUtilities/backendAPI';
import './UpdateForm.css';

const UpdateForm = ({lead, isOpen, handleClose}) => {
  const [leadStatus, setLeadStatus] = useState(lead.status);

  const options = ['Interested', 'Applied', 'Interviewing', 'Offered', 'Not Selected'].map(option => <option key={option} value={option}>{option}</option>);

  const updateStatus = (event) => {
    setLeadStatus(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // make api call to update lead status
    console.log(leadStatus);
    updateLeadStatus(lead.id, leadStatus)
    .then(() => {
      console.log("Lead status updated");
    })
    .catch((error) => {
      console.error(error);
    });
    handleClose();
  }

  return (
    <div className='update-form'>
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
          <h2>Quick Status Update</h2>
          <Divider sx={{ margin: '.5rem 0 1rem'}}/>
          <h4>{lead.title}</h4>
          <p className='company'>{lead.company}</p>
          <div className='status-select'>
            <p>{lead.status}</p>
            <KeyboardDoubleArrowRightIcon sx={{color: 'var(--primary-light-color)'}}/>
            <select onChange={updateStatus} name="status" id="status" defaultValue={lead.status}>
              {options}
            </select>
          </div>

        </DialogContent>
        <DialogActions>
          <div>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' variant='outlined' sx={{color: 'var(--primary-light-color)', borderColor: 'var(--primary-light-color)'}}>Update Status</Button>  
          </div>
        </DialogActions>
      </Dialog>
    </div>
  )
}

UpdateForm.propTypes = {
  lead: propTypes.object.isRequired,
  isOpen: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired
};

export default UpdateForm
