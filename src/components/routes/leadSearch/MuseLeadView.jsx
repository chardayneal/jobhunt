import propTypes from 'prop-types'

const MuseLeadView = ({selectedLead}) => {
  return (
    <div className="search-col muse-lead-view">
      {selectedLead ? <><h2>{selectedLead.name}</h2>
      <div className="company-postingDate">
        <p>{selectedLead.company}</p>
        <p>{selectedLead.jobPostingDate}</p>
      </div>
      <p>{selectedLead.location}</p>
      <div className="description">
        <p>{selectedLead.description}</p>
      </div></> : <p className='lead-not-selected'>Select a lead</p> }
    </div>
  )
}

MuseLeadView.propTypes = {
  selectedLead: propTypes.object
}

export default MuseLeadView
