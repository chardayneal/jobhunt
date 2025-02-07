import propTypes from 'prop-types';

const Plot = ({ plot }) => {
  return (
    <div className="plot">
      <h3>{plot.status}</h3>
    </div>
  )
}

Plot.propTypes = {
  plot: propTypes.object.isRequired
}

export default Plot;
