import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

export const getCardsForSearch = ({cards, columns}, searchString) => {
  cards.filter(card => new RegExp(searchString, 'i').test(card.title));

  return cards.map(card => {
    const columnSelector = columns.filter(column => card.columnId == column.id);
    const listSelector = columnSelector[0].listId;

    return {
      ...card,
      listId: listSelector,
    };
  });
};

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}