import propTypes from "prop-types";
import MuseScroll from "./MuseScroll"

const MuseResults = ({ leadResults, onLoadMoreData }) => {
  return (
    <section className="search-col muse-results">
      <MuseScroll loadMoreData={onLoadMoreData} leadResults={leadResults}/>
    </section>
  )
}

MuseResults.propTypes = {
  leadResults: propTypes.array,
  onLoadMoreData: propTypes.func
};

export default MuseResults
