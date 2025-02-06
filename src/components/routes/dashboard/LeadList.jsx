import propTypes from "prop-types";
import LeadSpeedDial from "./LeadSpeedDial";
import "./LeadList.css";
import LeadSelect from "./LeadSelect";


const LeadList = ({ leads }) => {
    const leadList = leads.map(lead => <LeadSelect key={lead.id} lead={lead} />);

  return (
    <section className="lead-item leads-list-container">
      <div className="leads-list">
        {leadList}
      </div>
      <LeadSpeedDial />
    </section>
  )
}

export default LeadList

LeadList.propTypes = {
    leads: propTypes.array.isRequired
}