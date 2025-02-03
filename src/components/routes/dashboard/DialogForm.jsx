import { useState} from 'react';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const DialogForm = ({addTask}) => {
  const [open, setOpen] = useState(false);
  const [taskText, setTaskText] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewTask = () => {
    addTask(taskText);
    setTaskText('');
    handleClose();
  }

  return (
    <>
      <span onClick={handleClickOpen}>
        Add Task
      </span>
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
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            required
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
          <span onClick={handleClose}>Cancel</span>
          <span onClick={(event) => {
            event.preventDefault();
            handleNewTask();
            handleClose();
          }}>Add</span>
        </DialogActions>
      </Dialog>
    </>
  )
}

DialogForm.propTypes = {
  addTask: propTypes.func.isRequired,
};

export default DialogForm;
