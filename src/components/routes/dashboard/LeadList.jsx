import propTypes from "prop-types";
import Lead from "./Lead";
import LeadSpeedDial from "./LeadSpeedDial";
import { Button } from "@mui/material";
import "./LeadList.css";


const LeadList = ({ leads }) => {
    const leadList = leads.map(lead => {
      return (
        <div key={lead.id} className="user-lead-item">
          <Lead key={lead.id} leadInfo={lead} />
          <div className="hover-overlay">
              <Button  variant="contained">Quick Update</Button>
              <Button  variant="outlined">View Lead</Button>
            </div>
        </div>
      )
    });

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