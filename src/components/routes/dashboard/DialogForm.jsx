import { useState} from 'react';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const DialogForm = ({userId, addTask}) => {
  const [open, setOpen] = useState(false);
  const [taskText, setTaskText] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewTask = () => {
    addTask(userId, taskText);
    setTaskText('');
    handleClose();
  }

  return (
    <>
      <Button 
        onClick={handleClickOpen} 
        variant='contained'
        sx={{ backgroundColor: 'var(--primary-dark-color)', color: 'var(--secondary-color)', textTransform: 'capitalize'}}
      >
        Add Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slot={{
          paper: {
          component: 'form'
          },
        }}
      >
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a task description below and select Add to create a new task.
          </DialogContentText>
          <TextField
            required
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            margin="dense"
            id="name"
            name="task"
            label="Task Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{textTransform: 'capitalize'}}>Cancel</Button>
          <Button 
            onClick={(event) => {
              event.preventDefault();
              handleNewTask();
              handleClose();
            }}
            variant='outlined'
            sx={{ borderColor: 'var(--primary-light-color)', color: 'var(--primary-light-color)', textTransform: 'capitalize'}}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

DialogForm.propTypes = {
  userId: propTypes.string,
  addTask: propTypes.func.isRequired,
};

export default DialogForm;
