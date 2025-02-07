import propTypes from "prop-types";
import MuseScroll from "./MuseScroll"

const MuseResults = ({ userId, leadResults, onLoadMoreData, onViewLeadClick }) => {
  return (
    <section className="search-col muse-results">
      <MuseScroll userId={userId}  viewLead={onViewLeadClick} loadMoreData={onLoadMoreData} leadResults={leadResults}/>
    </section>
  )
}

MuseResults.propTypes = {
  userId: propTypes.string,
  leadResults: propTypes.array,
  onLoadMoreData: propTypes.func,
  onViewLeadClick: propTypes.func
};

export default MuseResults
