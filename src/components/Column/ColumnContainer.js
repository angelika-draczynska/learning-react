import { connect } from 'react-redux';
import Column from './Column';
import { getCardsForColumn, createAction_addCard, createAction_deleteCard} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
  deleteCard: cardId => dispatch(createAction_deleteCard({
    cardId,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
