import { useState, useEffect } from "react";
import MuseHeader from "./MuseHeader";
import MuseResults from "./MuseResults";
import MuseLeadView from "./MuseLeadView";
import FilterPanel from "./FilterPanel";
import { getMuseLeads, formatLead, getMuseLeadById } from "../../../apiUtilities/museAPI";
import './LeadSearch.css';

const LeadSearch = () => {
  const [leadResults, setLeadResults] = useState([]);
  const [selectedLead, setSelectedLead] = useState({});
  const [queryParams, setQueryParams] = useState({ page: 0});

  useEffect(() => {
    getMuseLeads(queryParams).then((leads) => {
      let formattedLeads = leads.map((lead) => {
        if (lead.locations.length == 0) {
          lead.locations[0] = { name: 'In Description' };
        }
        return formatLead(lead);
      });
      setLeadResults((prevLeads) => prevLeads.concat(formattedLeads));
    });
  }, [queryParams]);

  const increasePageCount = () => {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  };

  const handleLeadView = (id) => {
    getMuseLeadById(id)
      .then((lead) => {
        setSelectedLead(formatLead(lead));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const updateQueryParams = (newParams) => {
    const params = { page: 0 }
    if (newParams.location) {
      params.location = newParams.location;
    }
    if (newParams.level) {
      params.level = newParams.level;
    }
    if (newParams.category) {
      params.category = newParams.category;
    }
    console.log('New Params:', params);
    setQueryParams(params);
    setLeadResults([]);
  }

  return (
    <div className="grid-item flex-area lead-search">
      <FilterPanel onApplyFilters={updateQueryParams}/>
      <MuseHeader/>
      <div className="search-container">
        <MuseResults onViewLeadClick={handleLeadView} onLoadMoreData={increasePageCount} leadResults={leadResults} />
        <MuseLeadView selectedLead={selectedLead}/>
      </div>
    </div>
  )
  }
  
  export default LeadSearch;