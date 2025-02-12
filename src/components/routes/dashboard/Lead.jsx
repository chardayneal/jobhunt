import propTypes from 'prop-types';
import './Lead.css';

const Lead = ({ leadInfo }) => {

  return (
    <div className='lead'>
        <h4>{leadInfo.title}</h4>
        <div className='lead-subText'>
            <p className='company'>{leadInfo.company}</p>
        </div>
    </div>
  )
}

Lead.propTypes = {
    leadInfo: propTypes.object.isRequired
}

export default Lead;