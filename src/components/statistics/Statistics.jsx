import PropTypes from 'prop-types';
import { StatisticsBlock, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export default function Statistics(props) {
  const {title, stats} = props;
  return <StatisticsBlock>
  {title ? <Title>{title}</Title> : ''}

  <StatList>
    {stats.map(data => 
      <StatItem key={data.id}>
        <Label>{data.label}</Label>
        <Percentage>{data.percentage}%</Percentage>
      </StatItem>
    )}
  </StatList>
</StatisticsBlock>
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
};
