import propTypes from 'prop-types';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const ShowSelectedLead = ({ lead }) => {
    const handleURLClick = () => {
        window.open(lead.jobURL, '_blank');
      };

  return (
    <div>
      <h2>{lead.title}</h2>
      <div className="company-url">
        <p className='company-name'>{lead.company}</p>
        {lead.jobURL && <Button onClick={handleURLClick} variant="contained" endIcon={<LaunchIcon/>}>APPLY FOR LEAD</Button>}
      </div>
      <div className="location-postingDate">
        <p className='location'>{lead.location}</p>
        <p>{lead.jobPostingDate}</p>
      </div>
      <div className="description" dangerouslySetInnerHTML={{ __html: lead.description }}></div>
    </div>
  )
};

ShowSelectedLead.propTypes = {
  lead: propTypes.object,
}
export default ShowSelectedLead;
