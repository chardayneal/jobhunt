import propTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';


const MuseList = ({ leadResults }) => {
  const museLeads = leadResults.map((lead) => {
    return (
      <div className="muse-lead" key={uuidv4()}>
        <h3>{lead.name}</h3>
        <div className="muse-subtext">
          <p className="lead-company">{lead.company}</p>
          <p className="lead-location">{lead.location}</p>
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
  leadResults: propTypes.array
};

export default MuseList
