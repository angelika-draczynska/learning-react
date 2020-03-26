import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsForSearch = ({cards, columns}, searchString) => {
  cards.filter(card => new RegExp(searchString, 'i').test(card.title));

  return cards.map(card => {
    const listSelector = columns.find(column => card.columnId == column.id).listId;
    return {
      ...card,
      listId: listSelector,
    };
  });
};
export const getCardsForColumn = ({ cards, searchString }, columnId) =>
  cards.filter(
    card =>
      card.columnId == columnId &&
      new RegExp(searchString, 'i').test(card.title)
  );

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const DELETE_CARD = createActionName('DELETE_CARD');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_CARD });

export const createAction_deleteCard = payload => ({ payload, type: DELETE_CARD });


// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    case DELETE_CARD:
      
      return state.filter((card) => card.id !== action.payload.cardId);
    default:
      return state;
  }
}