import propTypes from 'prop-types';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const DisplayLead = ({ lead }) => {

  const handleURLClick = () => {
    window.open(lead.jobURL, '_blank');
  };

  return (
    <div className="search-col muse-lead-view">
      {lead && <><h2>{lead.title}</h2>
        <div className="company-url">
            <p className='company-name'>{lead.company}</p>
            <Button onClick={handleURLClick} variant="contained" endIcon={<LaunchIcon/>}>Visit Posting</Button>
        </div>
        <div className="location-postingDate">
            <p className='location'>{lead.location}</p>
            <p>{lead.jobPostingDate}</p>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: lead.description }}></div>
      </>}
    </div>
  )
}

DisplayLead.propTypes = {
  lead: propTypes.object
};

export default DisplayLead
