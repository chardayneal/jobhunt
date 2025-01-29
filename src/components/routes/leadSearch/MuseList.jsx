import propTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


const MuseList = ({ leadResults, handleMuseLeadClick }) => {
  const museLeads = leadResults.map((lead) => {
    return (
      <div className="muse-lead" key={uuidv4()}>
        <h3>{lead.name}</h3>
        <div className="muse-subtext">
          <p className="lead-company">{lead.company}</p>
          <p className="lead-location">{lead.location}</p>
        </div>
        <div className="hover-overlay">
          <Button variant="contained" startIcon={<StarIcon/>}>Add to Leads</Button>
          <Button onClick={() => handleMuseLeadClick(lead.id)}  variant="outlined">View Lead</Button>
        </div>
      </div>
    )
  });
  
  return (
    <div>
      {museLeads}
    </div>
  )
}

MuseList.propTypes = {
  leadResults: propTypes.array,
  handleMuseLeadClick: propTypes.func
};

export default MuseList
