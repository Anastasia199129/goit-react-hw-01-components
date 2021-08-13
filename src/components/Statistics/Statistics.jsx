import PropTypes from 'prop-types';
import StatisticsList from './Statistics_list';
import s from './Statistics.module.css';

// const colors = [
//   { color: 'aqua' },
//   { color: 'blueviolet' },
//   { color: 'chartreuse' },
//   { color: 'coral' },
//   { color: 'darkmagenta' },
// ];

const Statistics = ({ stats , title}) => {
    return (
        <section className={s.statistics}>
          
            {title && <h2 className={s.title}>{title}</h2>}
            <StatisticsList items={stats}/>
         </section>
           
    )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    ),
    title: PropTypes.string
};




export default Statistics

