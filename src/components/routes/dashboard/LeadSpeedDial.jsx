import { useState } from 'react';
import { useNavigate } from 'react-router';
import LeadView from './LeadView';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const actions = [
  { icon: <NoteAddIcon />, name: 'Add New Lead' },
  { icon: <ManageSearchIcon />, name: 'Search For Leads' },
];

export default function LeadSpeedDial() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClickClose = () => {
      setOpen(false);
    }

  return (
    <Box className="lead-speed-dial" sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial To New Leads"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.name === "Add New Lead" ? handleClickOpen : () => navigate('/dashboard/search') }
          />
        ))}
      </SpeedDial>
      <LeadView isOpen={open} handleClose={handleClickClose}/>
    </Box>
  );
}