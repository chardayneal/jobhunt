import { useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

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
    handleClose();
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
          <h2>Quick Status Update</h2>
          <h3>{lead.title}</h3>
          <h4>{lead.company}</h4>
          <select onChange={updateStatus} name="status" id="status" defaultValue={lead.status}>
            {options}
          </select>

        </DialogContent>
        <DialogActions>
          <div>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Update Status</Button>  
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
