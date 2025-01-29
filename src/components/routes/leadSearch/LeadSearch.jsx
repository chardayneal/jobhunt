import MuseHeader from "./MuseHeader";

import './LeadSearch.css';

// This component will be used to search for leads

const LeadSearch = () => {
  return (
    <div className="grid-item flex-area lead-search">
      <div className="filter-panel"></div>
      <MuseHeader/>
      <div className="search-container">
        <h2>Search for leads</h2>
      </div>
    </div>
  )
  }
  
  export default LeadSearch;