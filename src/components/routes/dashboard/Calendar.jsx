import propTypes from 'prop-types';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';


const Calendar = ({ changeDate }) => {

  const handleDate = (date) => {
    changeDate(date.$d.toDateString());
  }
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DateCalendar className="dash-card calendar" onChange={handleDate} />
    </LocalizationProvider>
  )
}

Calendar.propTypes = {
  changeDate: propTypes.func.isRequired,
};

export default Calendar
