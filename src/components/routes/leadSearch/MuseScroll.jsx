import { useRef, useState, useEffect } from 'react';
import { Button } from '@mui/material';

const MuseScroll = () => {
  const [atBottom, setAtBottom] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollContainerRef.current;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        setAtBottom(true);
        console.log('Reached the bottom!');
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
    <div 
      className='muse-lead-list' 
      ref={scrollContainerRef}>
      <div className='list-container' style={{ height: '1000px' }}>
        <p>Scroll down to see the effect.</p>
        {atBottom && <Button className='load-more-btn' variant="contained" size="large">
          LOAD MORE RESULTS
        </Button>}
      </div>
    </div>
  );
};

export default MuseScroll;

