import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

import './InsightPanel.css';

const feelingsArray = [
  { date: '2025-02-01', text: 'Feeling a bit overwhelmed with work, but also excited for the weekend.' },
  { date: '2025-01-30', text: 'Pretty content today, had a nice conversation with an old friend.' },
  { date: '2025-01-28', text: 'Kind of drained lately, need some time to recharge.' },
  { date: '2025-01-25', text: 'Really focused, almost in a flow state. Feeling productive.' },
  { date: '2025-01-22', text: 'A little stressed, but trying to stay positive and tackle things one step at a time.' },
  { date: '2025-01-20', text: 'Feeling inspired! Had a creative breakthrough today.' },
  { date: '2025-01-18', text: 'Low energy today, thinking I need to slow down a bit.' },
  { date: '2025-01-15', text: 'Feeling pretty good, everything seems to be falling into place.' },
  { date: '2025-01-12', text: 'Overthinking everything lately, hoping I can relax soon.' },
  { date: '2025-01-10', text: 'Feeling grateful and optimistic, excited about upcoming projects.' }
];

const InsightPanel = () => {

  const insights = feelingsArray.map((item, index) => (
    <div className="insight-item" key={index}>
        <span className="item-date">{item.date}</span>
        <span className="item-text">{item.text}</span>
    </div>
  ))

  return (
    <div className="insight-grid-item insight-panel">
      <h3>Insight Corner</h3>
      <Fab 
        className='add-insight-btn'
        size="small" 
        color="secondary" 
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <Stack className='insight-list' spacing={2}>
        {insights}
      </Stack>
    </div>
  )
}

export default InsightPanel;
