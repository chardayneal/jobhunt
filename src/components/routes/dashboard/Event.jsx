import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Calendar from './Calendar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import DialogForm from './DialogForm';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

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

          <h3>Tasks</h3>

          <div className="task-header">
            <h4>{calendarDate}</h4>
            <DialogForm userId={localStorage.getItem('userId')} addTask={handleAddTask}/>
          </div>
          <Divider />

          <div className="event">
            {tasksByDate ? tasksByDate.map(task => {
              return (
                <div className="taskItem" key={task.id}>
                  <div className='task-left-col'>
                    <Checkbox 
                      sx={{
                        '&.Mui-checked': {
                          color: 'var(--secondary-dark-color)'
                        }
                      }} 
                      checked={task.isComplete} 
                      onChange={() => handleCheckboxSelection(task.id, task.isComplete)}/>
                    <p>{task.text}</p>
                  </div>
                  <IconButton 
                    onClick={() => setTaskToDelete({ id: task.id, dialog: true })} 
                    aria-label="delete">
                    <DeleteIcon  />
                  </IconButton>
                  <Dialog
                    open={taskToDelete.dialog}
                    onClose={() => {
                      setTaskToDelete({ id: '', dialog: false })
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Delete Task?"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description"> Are you sure you want to delete this task?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setTaskToDelete({ id: '', dialog: false })} sx={{textTransform: 'capitalize'}}>Cancel</Button>
                      <Button onClick={() => handleDeleteTask(taskToDelete.id)} sx={{textTransform: 'capitalize', color: '#A60000'}} > Delete </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              )
            }) : <p key={210}>No tasks for today</p>}
          </div>
      </div>
    </div>
  )
}

export default Event
