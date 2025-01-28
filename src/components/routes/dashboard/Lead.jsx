import propTypes from 'prop-types';
import './Lead.css';

const Lead = ({ leadInfo }) => {
  return (
    <div className='lead'>
        <h3>{leadInfo.title}</h3>
        <div className='lead-subText'>
            <p>{leadInfo.company}</p>
            <p>{leadInfo.location}</p>
        </div>
    </div>
  )
}

export default Lead


Lead.propTypes = {
    leadInfo: propTypes.object.isRequired
}