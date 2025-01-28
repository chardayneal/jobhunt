import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ArrowDropDown } from '@mui/icons-material';

import UserLeads from './UserLeads';
import Calendar from './Calendar';
import './Dashboard.css';

const Dashboard = () => {

  return (
    <div className="grid-item flex-area">
      <div className="dash-grid">
        <UserLeads />
        <div className="dash-item events">
            <Calendar />
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={ <ArrowDropDown/>} >
                    <h3>Today</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="event">
                    <p>Event 1</p>
                    <p>Event 1</p>
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
    </div>
  )
}

export default Dashboard