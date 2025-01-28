import propTypes from "prop-types";
import "./LeadList.css";
import Lead from "./Lead";


const LeadList = ({ leads }) => {
    const leadList = leads.map(lead => <Lead key={lead.id} leadInfo={lead} />);

  return (
    <section className="lead-item leads-list">
      {leadList}
    </section>
  )
}

export default LeadList

LeadList.propTypes = {
    leads: propTypes.array.isRequired
}