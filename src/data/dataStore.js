import uuid from 'react-uuid';

export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      id: uuid(),
      title: 'Books',
      icon: 'book',
      cards: [
        {
          id: uuid(),
          title: 'This Is Going to Hurt',
        },
        {
          id: uuid(),
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          id: uuid(),
          title: 'Harry Potter',
        },
        {
          id: uuid(),
          title: 'Star Wars',
        },
      ],
    },
    {
      id: uuid(),
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          id: uuid(),
          title: 'The Witcher',
        },
        {
          id: uuid(),
          title: 'Skyrim',
        },
      ],
    },
  ],
};
