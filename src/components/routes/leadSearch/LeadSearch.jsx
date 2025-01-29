import { useState, useEffect } from "react";
import MuseHeader from "./MuseHeader";
import MuseResults from "./MuseResults";
import MuseLeadView from "./MuseLeadView";
import { getMuseLeads, formatLead, getMuseLeadById } from "../../../apiUtilities/museAPI";
import './LeadSearch.css';

const LeadSearch = () => {
  const [leadResults, setLeadResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [selectedLead, setSelectedLead] = useState({});

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

  const handleLeadView = (id) => {
    getMuseLeadById(id)
      .then((lead) => {
        console.log(formatLead(lead).description);
        setSelectedLead(formatLead(lead));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="grid-item flex-area lead-search">
      <div className="filter-panel"></div>
      <MuseHeader/>
      <div className="search-container">
        <MuseResults onViewLeadClick={handleLeadView} onLoadMoreData={increasePageCount} leadResults={leadResults} />
        <MuseLeadView selectedLead={selectedLead}/>
      </div>
    </div>
  )
  }
  
  export default LeadSearch;