import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import DialogForm from './DialogForm';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ArrowDropDown } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Calendar from './Calendar';

import "./Event.css";
import { addNewTask, updateTaskStatus } from '../../../apiUtilities/backendAPI';


const Event = ({userId, userTasks, addNewUserTask, updateUserTasks}) => {
  const [tasksByDate, setTasksByDate] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date().toDateString());

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
                  </div>
                )
              }) : <p key={210}>No tasks for today</p>}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDown />} >
            <h3>Upcoming Events</h3>
          </AccordionSummary>
          <AccordionDetails>
              <div className="event">
                <p>Event 1</p>
                <p>Event 1</p>
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
