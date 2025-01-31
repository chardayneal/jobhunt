import propTypes from 'prop-types';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

import './LeadHeader.css';


const LeadHeader = ({ searchQuery, handleQueryChange }) => {

  return (
    <section className="lead-item lead-header">
        <h2>My Current Leads</h2>
          <TextField
            id="input-with-icon-textfield"
            className='lead-search-bar'
            placeholder="Search Leads..."
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                inputProps: {
                  'aria-label': 'search leads',
                  onInput: handleQueryChange,
                  value: searchQuery
                }
              },
              
            }}
            variant="standard"

          />
          <span className="tooltip">
          <InfoIcon className="info-icon tooltip" />
            <div className="status-legend tooltip-text">
                <fieldset>
                  <legend>STATUS</legend>
                  <div className="status">
                      <div className="square applied"></div>
                      <span className="applied-text">APPLIED</span>
                  </div>
                  <div className="status">
                      <div className="square interviewing"></div>
                      <span className="interviewing-text">INTERVIEWING</span>
                  </div>
                  <div className="status">
                      <div className="square offered"></div>
                      <span className="offered-text">OFFERED</span>
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