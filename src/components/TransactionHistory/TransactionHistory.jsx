import PropTypes, { shape } from 'prop-types';
import s from './TransactionHistory.module.css'


const TransactionHistory = ({items}) => {
    return (
        <table className={s.transactionHistory}>
  <thead className={s.table}>
    <tr className={s.tr}>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>

        <tbody>
          {items.map(item => (
    <tr className={s.tr} key={item.id}> 
      <td className={s.td}>{item.type}</td>
      <td className={s.td}>{item.amount}</td>
      <td className={s.td}>{item.currency}</td>
    </tr>
          ))}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }))
}


export default TransactionHistory