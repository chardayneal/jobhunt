import propTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const LeadView = ({ openLead, setOpenLead}) => {
  const handleClose = () => {
    setOpenLead(false);
  };
  
  return (
    <>
      <Backdrop
        className='backdrop'
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 99 })}
        open={openLead}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

LeadView.propTypes = {
  openLead: propTypes.bool,
  setOpenLead: propTypes.func,
};

export default LeadView
