import { connect } from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({ cards }, cardId) =>
  cards.filter(card => card.columnId == cardId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);
