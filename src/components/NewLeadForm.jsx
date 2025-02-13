import propTypes from "prop-types";
import TextField from '@mui/material/TextField';
import './NewLeadForm.css';

export const NewLeadForm = ({ leadData, handleLeadDataChange}) => {

  return (
      <div className="new-lead-form">
        <div className="lead-row">
        <TextField
          required
          value={leadData.title}
          onChange={handleLeadDataChange}
          margin="dense"
          id="title"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          value={leadData.company}
          onChange={handleLeadDataChange}
          margin="dense"
          id="company"
          name="company"
          label="Company"
          type="text"
          fullWidth
          variant="standard"
        />
        </div>
        <div className="lead-row">
      <TextField
          value={leadData.level}
          onChange={handleLeadDataChange}
          margin="dense"
          id="level"
          name="level"
          label="Level"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          value={leadData.location}
          onChange={handleLeadDataChange}
          margin="dense"
          id="location"
          name="location"
          label="Location"
          type="text"
          fullWidth
          variant="standard"
        />
        </div>
        <div className="lead-row">
        <TextField
        
          value={leadData.jobURL}
          onChange={handleLeadDataChange}
          margin="dense"
          id="jobURL"
          name="jobURL"
          label="Lead URL"
          type="url"
          pattern="https://.*"
          fullWidth
          variant="standard"
        />
        </div>
        <div className="lead-input">
          <label htmlFor="description">Job Description</label>
          <textarea
            onChange={handleLeadDataChange}
            value={leadData.description} 
            id="description"
            name="description" 
            rows="10" cols="40"></textarea>
        </div>
    </div>
  );
};

NewLeadForm.propTypes = {
  leadData: propTypes.object.isRequired,
  handleLeadDataChange: propTypes.func.isRequired,
};

export default NewLeadForm;