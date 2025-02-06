import propTypes from "prop-types";
import Lead from "./Lead";
import LeadSpeedDial from "./LeadSpeedDial";
import "./LeadList.css";


const LeadList = ({ leads }) => {
    const leadList = leads.map(lead => <Lead key={lead.id} leadInfo={lead} />);

  return (
    <section className="lead-item leads-list">
      {leadList}
      <LeadSpeedDial />
    </section>
  )
}

export default LeadList

LeadList.propTypes = {
    leads: propTypes.array.isRequired
}