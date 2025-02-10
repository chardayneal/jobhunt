import { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { addInsight, deleteInsight, getInsightsByUserId } from '../../../apiUtilities/backendAPI';
import './InsightPanel.css';


const InsightPanel = () => {
  const [insights, setInsights] = useState([]);
  const [insightText, setInsightText] = useState('');
  const [open, setOpen] = useState(false);
  const [insightToDelete, setInsightToDelete] = useState({ id: '', dialog: false });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getInsightsByUserId(userId)
      .then((data) => {
        setInsights(data);
      })
      .catch((error) => {
        console.error('Error fetching insights:', error);
      });
    }, [insights]);

  const formattedInsights = insights.map((item, index) => (
    <div className="insight-item" key={index}>
        <span className="item-date">{item.date}</span>
        <span className="item-text">{item.text}</span>
        <IconButton 
          onClick={() => setInsightToDelete({ id: item.id, dialog: true })} 
          aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <Dialog
          open={insightToDelete.dialog}
          onClose={() => {
            setInsightToDelete({ id: '', dialog: false })
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Insight?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this insight?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              setInsightToDelete({ id: '', dialog: false })
              }}>Cancel</Button>
            <Button onClick={() => handleInsightDelete(insightToDelete.id)} >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  ));

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteDialogOpen = () => {
    setInsightToDelete({ id: '', dialog: false})
  };

  const handleInsightDelete = (id) => {
    deleteInsight(id)
      .then(() => {
        setInsights(insights.filter((item) => item.id !== id));
        handleDeleteDialogOpen();
      })
      .catch((error) => {
        console.error('Error deleting insight:', error);
      });
  };

  const handleNewInsight = () => {
    const newInsight = { date: new Date().toDateString(), text: insightText };
    const userId = localStorage.getItem('userId');
    addInsight(userId, newInsight)
      .then((data) => {
        setInsights([...insights, data]);
      })
      .catch((error) => {
        console.error('Error adding insight:', error);
      });
    setInsightText('');
    handleClose();
  };


  return (
    <div className="insight-grid-item insight-panel">
      <h3>Insight Corner</h3>
      <Fab 
        className='add-insight-btn'
        size="small" 
        color="secondary" 
        aria-label="add"
      >
        <AddIcon onClick={() => setOpen(true)} />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        slot={{
          paper: {
          component: 'form'
          },
        }}
      >
        <DialogTitle>Add New Insight</DialogTitle>
        <DialogContent>
          <DialogContentText>
            How&apos;s the job hunt going? Add an insight below to track your progress.
          </DialogContentText>
          <TextField
            required
            value={insightText}
            onChange={(e) => setInsightText(e.target.value)}
            margin="dense"
            id="name"
            name="task"
            label="Task Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <span onClick={handleClose}>Cancel</span>
          <span onClick={(event) => {
            event.preventDefault();
            handleNewInsight();
            handleClose();
          }}>Add</span>
        </DialogActions>
      </Dialog>
      <Stack className='insight-list' spacing={2}>
        {formattedInsights}
      </Stack>
    </div>
  )
}

export default InsightPanel;
