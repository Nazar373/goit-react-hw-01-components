import PropTypes from 'prop-types';
import { Table, Thead, Element } from './TransactionHistory.styled';

export default function TransactionHistory({items}) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
      {items.map(({id, type, amount, currency}) => (
        <Element key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </Element>
      ))}
      </tbody>
    </Table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
};