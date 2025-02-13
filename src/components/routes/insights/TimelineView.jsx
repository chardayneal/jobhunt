import propTypes from 'prop-types';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Plot from './Plot';


const TimelineView = ({ history }) => {
  const colorMap = {
    'Interested': 'black',
    'Applied': 'var(--primary-dark-color)',
    'Interviewing': '#fb8500',
    'Offered': 'var(--primary-light-color)',
    'Not Selected': '#a6a6a6'
  }

  const timelinePlots = history.map((plot, index) => {
    return (
      <TimelineItem key={index}>
      <TimelineOppositeContent color="textSecondary">
        {plot.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={{backgroundColor: colorMap[plot.status]}}/>
        <TimelineConnector sx={{ backgroundColor: colorMap[plot.status] }} />
      </TimelineSeparator>
      <TimelineContent sx={ {color: colorMap[plot.status] }}>
        <Plot plot={plot} />
      </TimelineContent>
      </TimelineItem>
      )
    }
  );

  return (
    <div className="timeline-view timeline-col">
      <Timeline>
        {timelinePlots}
        <TimelineItem key="current">
          <TimelineOppositeContent color="textSecondary">
            {new Date().toDateString()}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined'/>
          </TimelineSeparator>
          <TimelineContent>
            <h3>Present</h3>
          </TimelineContent>
      </TimelineItem>
      </Timeline>
    </div> 
  )
}

TimelineView.propTypes = {
  history: propTypes.array,
}

export default TimelineView
