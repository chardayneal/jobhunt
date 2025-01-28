import propTypes from "prop-types";
import Lead from "./Lead";
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./LeadList.css";


const LeadList = ({ leads }) => {
    const leadList = leads.map(lead => <Lead key={lead.id} leadInfo={lead} />);

  return (
    <section className="lead-item leads-list">
      {leadList}
      <IconButton aria-label="add" size="large" className="add-lead-btn" >
        <AddCircleIcon className='add-btn'/>
      </IconButton>
    </section>
  )
}

export default LeadList

LeadList.propTypes = {
    leads: propTypes.array.isRequired
}