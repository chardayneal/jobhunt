import MuseHeader from "./MuseHeader";
import MuseResults from "./MuseResults";

import './LeadSearch.css';

// This component will be used to search for leads

const LeadSearch = () => {
  return (
    <div className="grid-item flex-area lead-search">
      <div className="filter-panel"></div>
      <MuseHeader/>
      <div className="search-container">
        <MuseResults />
        <div className="search-col muse-lead-view"></div>
      </div>
    </div>
  )
  }
  
  export default LeadSearch;