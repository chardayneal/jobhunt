import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import './MuseLeadView.css';

const MuseLeadView = ({selectedLead}) => {
  const [showButton, setShowButton] = useState(false);

  const handleURLClick = () => {
    window.open(selectedLead.jobURL, '_blank');
  };

  useEffect(() => {
    if (Object.keys(selectedLead).length === 0) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [selectedLead]);


  return (
    <div className='search-col muse-lead-view'>
      {selectedLead ? <><h2>{selectedLead.title}</h2>
      <div className="company-url">
        <p className='company-name'>{selectedLead.company}</p>
        {showButton && <Button onClick={handleURLClick} variant="contained" endIcon={<LaunchIcon/>}>APPLY FOR LEAD</Button>}
      </div>
      <div className="location-postingDate">
        <p className='location'>{selectedLead.location}</p>
        <p>{selectedLead.jobPostingDate}</p>
      </div>
      <div className="description" dangerouslySetInnerHTML={{ __html: selectedLead.description }}></div>
      {showButton && <Button className='bottom-apply-btn' onClick={handleURLClick} variant="contained" endIcon={<LaunchIcon/>}>APPLY FOR LEAD</Button>}</> : <p className='lead-not-selected'>Select a lead</p> }
    </div>
  )
}

MuseLeadView.propTypes = {
  selectedLead: propTypes.object
}

export default MuseLeadView
