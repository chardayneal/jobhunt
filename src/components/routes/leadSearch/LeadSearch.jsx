import { useState, useEffect } from "react";
import MuseHeader from "./MuseHeader";
import MuseResults from "./MuseResults";
import { getMuseLeads, formatLead } from "../../../apiUtilities/museAPI";
import './LeadSearch.css';

const LeadSearch = () => {
  const [leadResults, setLeadResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getMuseLeads(pageCount).then((leads) => {
      const formattedLeads = leads.map((lead) => {
        if (lead.locations.length == 0) {
          lead.locations[0] = { name: 'In Description' };
        }
        return formatLead(lead);
      });
      setLeadResults((prevLeads) => prevLeads.concat(formattedLeads));
    });
  }, [pageCount]);

  const increasePageCount = () => {
    setPageCount(pageCount + 1);
  };

  return (
    <div className="grid-item flex-area lead-search">
      <div className="filter-panel"></div>
      <MuseHeader/>
      <div className="search-container">
        <MuseResults onLoadMoreData={increasePageCount} leadResults={leadResults} />
        <div className="search-col muse-lead-view"></div>
      </div>
    </div>
  )
  }
  
  export default LeadSearch;