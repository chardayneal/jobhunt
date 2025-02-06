import propTypes from 'prop-types';
import NewLeadForm from '../../NewLeadForm';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const LeadView = ({ isOpen, handleClose }) => {
  

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        slot={{
          paper: {
          component: 'form'
          },
        }}
      >
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent>
          <NewLeadForm />
        </DialogContent>
        <DialogActions>
          <span onClick={handleClose}>Cancel</span>
          <span onClick={(event) => {
            event.preventDefault();
            console.log("New lead created");
            handleClose();
          }}>Add</span>
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
