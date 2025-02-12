import propTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteLead } from '../../../apiUtilities/backendAPI';
import './ShowSelectedLead.css';

const ShowSelectedLead = ({ lead, handleLeadClose }) => {
    const handleURLClick = () => {
        window.open(lead.jobURL, '_blank');
      };

  const [open, setOpen] = useState(false);

  const handleLeadDelete = () => {
    deleteLead(lead.id)
      .then(() => {
        setOpen(false);
        handleLeadClose();
        console.log("Lead deleted");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='show-selected-lead'>
      <h3>{lead.title}</h3>
      <div className="company-postingDate">
        <p className='company-name'>{lead.company}</p>
        <p>{lead.jobPostingDate}</p>
        
      </div>
      <div className="location-url">
        <p className='location'>{lead.location}</p>
        {lead.jobURL && <Button 
          onClick={handleURLClick} 
          variant="contained" 
          endIcon={<LaunchIcon/>}
          sx={{ backgroundColor: 'var(--primary-light-color)', textTransform: 'capitalize' }}
        >
          Visit Posting
        </Button>}
      </div>
      <div className="description" dangerouslySetInnerHTML={{ __html: lead.description }}></div>
      <Button 
        variant="outlined" 
        onClick={() => setOpen(true)}
        sx={{ 
          color: 'red', 
          borderColor: 'red', 
          '&:hover': {backgroundColor: '#A60000', color: 'white'}}}>
        Delete Lead
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Lead?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this lead?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleLeadDelete} >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

ShowSelectedLead.propTypes = {
  lead: propTypes.object,
  handleLeadClose: propTypes.func.isRequired
}
export default ShowSelectedLead;
