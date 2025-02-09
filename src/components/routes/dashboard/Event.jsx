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
import { addNewTask, deleteTask, getTasksByUserId, updateTaskStatus } from '../../../apiUtilities/backendAPI';


const Event = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksByDate, setTasksByDate] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date().toDateString());
  // const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState({ id: '', dialog: false });


  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getTasksByUserId(userId)
      .then((tasks) => {
        setTasks(tasks);
        setTasksByDate(tasks.filter(task => task.date === calendarDate));
      })
      .catch((error) => {
        console.error(error);
      });
    }, [tasks, calendarDate]);
    
  
  const handleDateChange = (date) => {
    setCalendarDate(date);
    setTasksByDate(tasks.filter(task => task.date === date));
  };

  const handleAddTask = (id, task) => {
    const newTask = { text: task, date: calendarDate};
    addNewTask(id, newTask)
    .then((response) => {
      console.log(response);
      setTasks(prevTasks => [...prevTasks, response]);
      setTasksByDate(prevTasks => [...prevTasks, response]);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleCheckboxSelection = (id, isComplete) => {
    updateTaskStatus(id, !isComplete)
    .then((response) => {
      console.log(response);
      setTasksByDate(prevTasks => prevTasks.map(task => task.id === id ? response : task));
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleDeleteTask = (id) => {
    deleteTask(id)
    .then((response) => {
      console.log(response);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      // setDeleteConfirmOpen(false);
      setTaskToDelete({ id: '', dialog: false });
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
              <DialogForm userId={localStorage.getItem('userId')} addTask={handleAddTask}/>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="event">
              {tasksByDate ? tasksByDate.map(task => {
                return (
                  <div className="taskItem" key={task.id}>
                    <Checkbox checked={task.isComplete} onChange={() => handleCheckboxSelection(task.id, task.isComplete)}/>
                    <p>{task.text}</p>
                    <IconButton onClick={() => {
                      console.log(task);
                      // setDeleteConfirmOpen(true)
                      setTaskToDelete({ id: task.id, dialog: true })
                      }} aria-label="delete">
                      <DeleteIcon  />
                    </IconButton>
                    <Dialog
                      open={taskToDelete.dialog}
                      onClose={() => {
                        // setDeleteConfirmOpen(false);
                        setTaskToDelete({ id: '', dialog: false })
                      }}
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
                        <Button onClick={() => {
                          // setDeleteConfirmOpen(false);
                          setTaskToDelete({ id: '', dialog: false })
                          }}>Cancel</Button>
                        <Button onClick={() => handleDeleteTask(taskToDelete.id)} >
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

export default Event
