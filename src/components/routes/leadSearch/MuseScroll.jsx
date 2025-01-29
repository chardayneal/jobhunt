import { useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Button } from '@mui/material';
import MuseList from './MuseList';

const MuseScroll = ({ leadResults, loadMoreData, viewLead }) => {
  const [atBottom, setAtBottom] = useState(false);
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const element = scrollContainerRef.current;
      if (element.scrollHeight - element.scrollTop <= element.clientHeight + 5) {
        setAtBottom(true);
        // Load more content or perform other actions
      } else {
        setAtBottom(false);
      }
    };

    const element = scrollContainerRef.current;
    element.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='muse-lead-list' ref={scrollContainerRef}>
      <div className='list-container'>
        <MuseList handleMuseLeadClick={viewLead} leadResults={leadResults}/>
        {atBottom && <Button onClick={loadMoreData} className='load-more-btn' variant="contained" size="large">
          LOAD MORE RESULTS
        </Button>}
      </div>
    </div>
  );
};

MuseScroll.propTypes = {
  leadResults: propTypes.array,
  loadMoreData: propTypes.func, 
  viewLead: propTypes.func
};

export default MuseScroll;

