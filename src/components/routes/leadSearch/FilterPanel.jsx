import { useState } from "react";
import propTypes from "prop-types";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";

const FilterPanel = ({ onApplyFilters}) => {
  const [level, setLevel] = useState('');

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  }


  const handleFilterChange = () => {
    console.log('Filter changed');
    onApplyFilters({ level });
  }

  const handleFilterClear = () => {
    console.log('Filter cleared');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
      radio.checked = false;
    });
    setLevel('');
  }


  return (
    <div className="dash-card filter-panel">
      <div className="filter-container">
        <h4>Filter Results</h4>
        <div className="levels">
          <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="job-level-content"
            id="levels-header"
          >
            <Typography className="accordion-title" component="span">Levels</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="levels-container">
              <div className="level-status">
                <input onChange={handleLevelChange} type="radio" name="levels" value="Internship" id="internship" />
                <label htmlFor="internship">Internship </label>
              </div>
              <div className="level-status">
                <input onChange={handleLevelChange} type="radio" name="levels" value="Entry Level" id="entry-level" />
                <label htmlFor="entry-level">Entry Level</label>
              </div>
              <div className="level-status">
                <input onChange={handleLevelChange} type="radio" name="levels" value="Mid Level" id="mid-level" />
                <label htmlFor="mid-level">Mid Level</label>
              </div>
              <div className="level-status">
                <input onChange={handleLevelChange} type="radio" name="levels" value="Senior Level" id="senior-level" />
                <label htmlFor="senior-level">Senior Level</label>
              </div>
            <Button className="clear-levels-btn" onClick={handleFilterClear} size="small" variant="text">CLEAR</Button>
            </div>
          </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="accordion-title" component="span">Boards</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div className="boards-container">
              <div className="board">
                <input type="checkbox" name="muse" value="muse" id="muse" defaultChecked/>
                <label htmlFor="muse">The Muse </label>
              </div>
              <div className="board">
                <input type="checkbox" name="linkedin" value="linkedin" id="linkedin" />
                <label htmlFor="linkedin">LinkedIn</label>
              </div>
              <Button className="clear-levels-btn" onClick={handleFilterClear} size="small" variant="text">CLEAR</Button>
            </div>
            </AccordionDetails>
          </Accordion>
          <Button 
            className="apply-filters" 
            onClick={handleFilterChange} 
            variant="outlined" 
            sx={{
              color: 'var(--primary-light-color)', 
              borderColor: 'var(--primary-light-color)',
              textTransform: 'capitalize'}}>Apply Filters</Button>
        </div>
      </div>
    </div>
  )
}

FilterPanel.propTypes = {
  onApplyFilters: propTypes.func
};

export default FilterPanel;
