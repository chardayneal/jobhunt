import propTypes from 'prop-types';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Plot from './Plot';


const TimelineView = ({ history }) => {
  const timelinePlots = history.map((plot, index) => {
    return (
      <TimelineItem key={index}>
      <TimelineOppositeContent color="textSecondary">
        {plot.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Plot plot={plot} />
      </TimelineContent>
      </TimelineItem>
      )
    }
  );

  return (
    <div className="timeline-view timeline-col">
      <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
      >
        {timelinePlots}
        <TimelineItem key="current">
          <TimelineOppositeContent color="textSecondary">
            {new Date().toDateString()}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
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
