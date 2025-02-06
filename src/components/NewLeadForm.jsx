import './NewLeadForm.css';

export const NewLeadForm = () => {

  return (
    <div className="new-lead-form">
      <button className='close-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      </button>
      <h2>New Lead Details</h2>
      <p>Enter the lead details below</p>

      <form className="new-lead">
        <div className='form-input'>
        <div className='lead-col left-col'>
          <div className="lead-input">
            <label htmlFor="title">Job Title</label>
            <input 
              type="text"
              id="title"
              name="title"
              placeholder='i.e Software Engineer' />
          </div>

          <div className="lead-input">
            <label htmlFor="company">Company Name</label>
            <input 
              type="text"
              id="company"
              name="company" />
          </div>

          <fieldset className="lead-input">
            <legend>Status</legend>
            <div className="status">
            <div className='status-col'>
              <div className='status-input'>
                <input type="checkbox" id="applied" name="applied" defaultChecked />
                <label htmlFor="applied">Applied</label>
              </div>
              <div className='status-input'>
                <input type="checkbox" id="offered" name="offered" />
                <label htmlFor="offered">Offered</label>
              </div>
            </div>
            <div className='status-col'>
              <div className='status-input'>
                <input type="checkbox" id="interviewing" name="interviewing" />
                <label htmlFor="interviewing">Interviewing</label>
              </div>
              <div className='status-input'>
                <input type="checkbox" id="notSelected" name="notSelected" />
                <label htmlFor="notSelected">Not Selected</label>
              </div>
            </div>
            </div>
          </fieldset>
        </div>


        <div className='lead-col right-col'>
          <div className="lead-input">
            <label htmlFor="jobPostingDate">Job Posting Date</label>
            <input 
              type="date"
              id="jobPostingDate"
              name="jobPostingDate" 
              />
          </div>

          <div className="lead-input">
            <label htmlFor="jobURL">Job Post URL</label>
            <input 
              type="url"
              id="jobURL"
              name="jobURL" />
          </div>

          <div className="lead-input">
            <label htmlFor="description">Job Description</label>
            <textarea 
              id="description"
              name="description" 
              rows="10" cols="40"></textarea>
          </div>
        </div>
        </div>
        <input className="create-btn" type="submit" value="CREATE NEW LEAD" />
      </form>
  </div>
  );
};

export default NewLeadForm;