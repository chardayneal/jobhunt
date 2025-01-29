import propTypes from "prop-types";
import MuseScroll from "./MuseScroll"

const MuseResults = ({ leadResults, onLoadMoreData, onViewLeadClick }) => {
  return (
    <section className="search-col muse-results">
      <MuseScroll viewLead={onViewLeadClick} loadMoreData={onLoadMoreData} leadResults={leadResults}/>
    </section>
  )
}

MuseResults.propTypes = {
  leadResults: propTypes.array,
  onLoadMoreData: propTypes.func,
  onViewLeadClick: propTypes.func
};

export default MuseResults
