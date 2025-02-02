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


const PLOTS = [
  {
    status: 'Complete',
    title: 'Plot 1',
    date: '2023-10-01'
  },
  {
    status: 'In Progress',
    title: 'Plot 2',
    date: '2023-10-02'
  },
  {
    status: 'Not Started',
    title: 'Plot 3',
    date: '2023-10-03'
  },
];

const TimelineView = () => {
  const timelinePlots = PLOTS.map((plot, index) => {
    if (index == PLOTS.length - 1) {
      return (
        <TimelineItem key={index}>
        <TimelineOppositeContent color="textSecondary">
          {plot.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Plot plot={plot} />
        </TimelineContent>
        </TimelineItem>
        )}
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
  })

  return (
    <div className="timeline-view timeline-col">
      <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
      >
        {timelinePlots}
      </Timeline>
    </div> 
  )
}

export default TimelineView
