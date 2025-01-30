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
    <div className="filter-panel">
      <div className="filter-container">
        <h3>FILTER RESULTS</h3>
        <div className="levels">
          <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="levels-header"
          >
            <Typography component="span">Levels</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button onClick={handleFilterClear} size="small" variant="text">CLEAR</Button>
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
            </div>
          </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Location</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Button onClick={handleFilterChange} variant="outlined">APPLY FILTERS</Button>
        </div>
      </div>
    </div>
  )
}

FilterPanel.propTypes = {
  onApplyFilters: propTypes.func
};

export default FilterPanel;
