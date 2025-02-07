import propTypes from "prop-types";
import TextField from '@mui/material/TextField';

export const NewLeadForm = ({ leadData, handleLeadDataChange}) => {

  return (
      <>
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

        <fieldset className="lead-input">
          <legend>Status</legend>
          <div className="status-radio">
            <input onSelect={handleLeadDataChange} type="radio" id="interested" name="status" value="interested" defaultChecked required/>
            <label htmlFor="interested">Interested</label>
          </div>
          <div className="status-radio">
            <input onSelect={handleLeadDataChange} type="radio" id="applied" name="status" value="applied" />
            <label htmlFor="applied">Applied</label>
          </div>
          <div className="status-radio">
            <input onSelect={handleLeadDataChange} type="radio" id="interviewing" name="status" value="interviewing"/>
            <label htmlFor="interviewing">Interviewing</label>
          </div>
          <div className="status-radio">
            <input onSelect={handleLeadDataChange} type="radio" id="offered" name="status" value="offered" />
            <label htmlFor="offered">Offered</label>
          </div>
          <div className="status-radio">
            <input onSelect={handleLeadDataChange} type="radio" id="notSelected" name="status" value="notSelected"/>
            <label htmlFor="notSelected">Not Selected</label>
          </div>

        </fieldset>
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

        <div className="lead-input">
          <label htmlFor="description">Job Description</label>
          <textarea
            onChange={handleLeadDataChange}
            value={leadData.description} 
            id="description"
            name="description" 
            rows="10" cols="40"></textarea>
        </div>
    </>
  );
};

NewLeadForm.propTypes = {
  leadData: propTypes.object.isRequired,
  handleLeadDataChange: propTypes.func.isRequired,
};

export default NewLeadForm;