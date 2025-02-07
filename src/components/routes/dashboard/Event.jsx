import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import DialogForm from './DialogForm';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ArrowDropDown } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Calendar from './Calendar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

import "./Event.css";
import { addNewTask, deleteTask, updateTaskStatus } from '../../../apiUtilities/backendAPI';


const Event = ({userId, userTasks, addNewUserTask, updateUserTasks}) => {
  const [tasksByDate, setTasksByDate] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date().toDateString());
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  useEffect(() => {

    setTasksByDate(userTasks.filter(task => task.date === calendarDate));
  }, [userTasks, calendarDate]);

  
  const handleDateChange = (date) => {
    setCalendarDate(date);
    setTasksByDate(userTasks.filter(task => task.date === date));
  };

  const handleAddTask = (id, task) => {
    const newTask = { text: task };
    addNewTask(id, newTask)
    .then((response) => {
      console.log(response);
      addNewUserTask(response);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleCheckboxSelection = (id, isComplete) => {
    updateTaskStatus(id, !isComplete)
    .then((response) => {
      console.log(response);
      updateUserTasks(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleDeleteTask = (id) => {
    deleteTask(id)
    .then((response) => {
      console.log(response);
      setDeleteConfirmOpen(false);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="dash-item events">
        <Calendar changeDate={handleDateChange} />
      <div className='dash-card tasks-col'>
          <h2>Tasks</h2>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={ <ArrowDropDown/>} >
            <div className="task-header">
              <h3>{calendarDate}</h3>
              <DialogForm userId={userId} addTask={handleAddTask}/>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="event">
              {tasksByDate ? tasksByDate.map(task => {
                return (
                  <div className="taskItem" key={task.id}>
                    <Checkbox checked={task.isComplete} onChange={() => handleCheckboxSelection(task.id, task.isComplete)}/>
                    <p>{task.text}</p>
                    <IconButton onClick={() => setDeleteConfirmOpen(true)} aria-label="delete">
                      <DeleteIcon  />
                    </IconButton>
                    <Dialog
                      open={deleteConfirmOpen}
                      onClose={() => setDeleteConfirmOpen(false)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Delete Task?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Are you sure you want to delete this task?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setDeleteConfirmOpen(false)}>Cancel</Button>
                        <Button onClick={() => handleDeleteTask(task.id)} >
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                )
              }) : <p key={210}>No tasks for today</p>}
            </div>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  )
}

Event.propTypes = {
  userId: propTypes.string,
  userTasks: propTypes.array,
  addNewUserTask: propTypes.func.isRequired,
  updateUserTasks: propTypes.func.isRequired
}

export default Event
