import { useState, useEffect } from 'react';
import DialogForm from './DialogForm';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ArrowDropDown } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Calendar from './Calendar';

import "./Event.css";

const TASKS = [
  { date: new Date('2025-02-01T09:00:00').toDateString(), text: 'Finish writing the report', id: 1, isComplete: false },
  { date: new Date('2025-02-01T10:15:00').toDateString(), text: 'Call the client about project update', id: 2, isComplete: true },
  { date: new Date('2025-02-02T08:30:00').toDateString(), text: 'Review pull requests', id: 3, isComplete: false },
  { date: new Date('2025-02-02T13:00:00').toDateString(), text: 'Prepare presentation slides', id: 4, isComplete: true },
  { date: new Date('2025-02-03T15:00:00').toDateString(), text: 'Reply to email from HR', id: 5, isComplete: false },
  { date: new Date('2025-02-04T09:45:00').toDateString(), text: 'Check the server logs', id: 6, isComplete: false },
  { date: new Date('2025-02-05T11:30:00').toDateString(), text: 'Fix bug in the checkout page', id: 7, isComplete: true },
  { date: new Date('2025-02-06T14:00:00').toDateString(), text: 'Set up new development environment', id: 8, isComplete: false },
  { date: new Date('2025-02-07T09:00:00').toDateString(), text: 'Prepare financial report for Q1', id: 9, isComplete: true },
  { date: new Date('2025-02-08T16:30:00').toDateString(), text: 'Clean up the database records', id: 10, isComplete: false },
  { date: new Date('2025-02-09T13:45:00').toDateString(), text: 'Conduct team meeting for project planning', id: 11, isComplete: true },
  { date: new Date('2025-02-10T10:00:00').toDateString(), text: 'Write unit tests for new feature', id: 12, isComplete: false },
  { date: new Date('2025-02-11T14:30:00').toDateString(), text: 'Update software dependencies', id: 13, isComplete: false },
  { date: new Date('2025-02-12T08:00:00').toDateString(), text: 'Meet with the marketing team', id: 14, isComplete: true },
  { date: new Date('2025-02-13T17:00:00').toDateString(), text: 'Design the user interface for the app', id: 15, isComplete: false },
  { date: new Date('2025-02-14T12:00:00').toDateString(), text: 'Document the API changes', id: 16, isComplete: false },
  { date: new Date('2025-02-15T11:15:00').toDateString(), text: 'Test the new version of the app', id: 17, isComplete: true },
  { date: new Date('2025-02-16T13:30:00').toDateString(), text: 'Review code quality and improve readability', id: 18, isComplete: false },
  { date: new Date('2025-02-17T09:00:00').toDateString(), text: 'Discuss new feature requests with stakeholders', id: 19, isComplete: true },
  { date: new Date('2025-02-18T14:00:00').toDateString(), text: 'Prepare the deployment for production', id: 20, isComplete: false },
  { date: new Date('2025-02-19T16:30:00').toDateString(), text: 'Update the user manual for the product', id: 21, isComplete: false },
  { date: new Date('2025-02-20T10:45:00').toDateString(), text: 'Organize a team-building activity', id: 22, isComplete: true },
  { date: new Date('2025-02-21T11:00:00').toDateString(), text: 'Check for security vulnerabilities in the app', id: 23, isComplete: false },
  { date: new Date('2025-02-22T09:30:00').toDateString(), text: 'Improve website SEO', id: 24, isComplete: true },
  { date: new Date('2025-02-23T13:00:00').toDateString(), text: 'Train new hires on company tools', id: 25, isComplete: false }
];

console.log(TASKS);


const Event = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [tasksByDate, setTasksByDate] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date().toDateString());

  
  // added tasks to dependency array to get checkbox to persist
  useEffect(() => {
    const displayTasks = tasks.filter(task => task.date === calendarDate);
    setTasksByDate(displayTasks);
  }, [calendarDate, tasks]);
  
  const handleDateChange = (date) => {
    console.log(date)
    setCalendarDate(date);
    // make call to BE to get the tasks for selected date, 
  };

  const handleAddTask = (task) => {
    const newTask = { date: calendarDate, text: task, id: tasks.length + 1, isComplete: false };

    setTasks([...tasks, newTask]);
    setTasksByDate([...tasksByDate, newTask]);
  };


// checkbox selection not persisting??
  const handleCheckboxSelection = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(updatedTasks);
    setTasksByDate(updatedTasks.filter(task => task.date === calendarDate));
  }
  return (
    <div className="dash-item events">
      <Calendar changeDate={handleDateChange} />
        <h2>Tasks</h2>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={ <ArrowDropDown/>} >
          <div className="task-header">
            <h3>{calendarDate}</h3>
            <DialogForm addTask={handleAddTask}/>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="event">
            {tasksByDate ? tasksByDate.map(task => {
              return (
                <div className="taskItem" key={task.id}>
                  {task.isComplete ? 
                    <Checkbox value={task.id} onClick={(e) => handleCheckboxSelection(e.target.value)} defaultChecked /> : 
                    <Checkbox value={task.id} onClick={(e) => handleCheckboxSelection(e.target.value)}/>}
                  <p>{task.text}</p>
                </div>
              )
            }) : <p>No tasks for today</p>}
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
  )
}

export default Event
