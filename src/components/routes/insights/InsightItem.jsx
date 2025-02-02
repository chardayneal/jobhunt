import propTypes from 'prop-types';

const InsightItem = ({ item }) => {
  return (
    <div className="insight-item">
        <span className="item-date">{item.date}</span>
        <span className="item-text">{item.text}</span>
    </div>
  )
}

InsightItem.propTypes = {
    item: propTypes.object.isRequired
}
export default InsightItem;
