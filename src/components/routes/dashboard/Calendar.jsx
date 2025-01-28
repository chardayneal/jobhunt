import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';


const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar defaultValue={dayjs(Date.now())} />
    </LocalizationProvider>
  )
}

export default Calendar
