import PropTypes from 'prop-types';
import s from './Statistics.module.css';


const StatisticsList = ({ items }) => {
  return (
    <ul className={s.statList}>
      {items.map(item => (
        <li key={item.id} className={s.item}>
          <span className={s.label}>{item.label}</span>
          <span className={s.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};



StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      performance: PropTypes.number

      
    }))
    
}

export default StatisticsList;
