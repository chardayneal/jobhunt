import propTypes from 'prop-types';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

import './LeadHeader.css';


const LeadHeader = ({ searchQuery, handleQueryChange }) => {

  return (
    <section className="lead-item lead-header">
        <h3>My Current Leads</h3>
          <TextField
            id="input-with-icon-textfield"
            className='lead-search-bar'
            placeholder="Search Leads by Title"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                inputProps: {
                  'aria-label': 'search leads',
                  onInput: handleQueryChange,
                  value: searchQuery,
                  style: { textAlign: 'center', padding: '.5rem 0 '}
                },
                style: { borderRadius: '100px' }
              },
            }}
            variant="outlined"
          

          />
          <span className="tooltip">
          <InfoIcon className="info-icon tooltip" />
            <div className="status-legend tooltip-text">
                <fieldset>
                  <legend>STATUS</legend>
                  <div className="status">
                      <div className="square interested"></div>
                      <span className="interested-text">Interested</span>
                  </div>
                  <div className="status">
                      <div className="square applied"></div>
                      <span className="applied-text">Applied</span>
                  </div>
                  <div className="status">
                      <div className="square interviewing"></div>
                      <span className="interviewing-text">Interviewing</span>
                  </div>
                  <div className="status">
                      <div className="square offered"></div>
                      <span className="offered-text">Offered</span>
                  </div>
                  <div className="status">
                      <div className="square notSelected"></div>
                      <span className="not-selected-text">Not Selected</span>
                  </div>
                </fieldset>
            </div>
          </span>
      </section>
  )
}

LeadHeader.propTypes = {
  searchQuery: propTypes.string.isRequired,
  handleQueryChange: propTypes.func.isRequired
};

export default LeadHeader;