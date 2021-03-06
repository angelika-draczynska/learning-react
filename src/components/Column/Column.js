import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icons/Icon.js';

class Column extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  static propTypes = {
    titleText: PropTypes.node,
    icon: PropTypes.node,
    cards: PropTypes.array,
    title: PropTypes.string,
    addCard: PropTypes.func,
    deleteCard: PropTypes.func,
  };

  render() {
    const { title, icon, cards, addCard, deleteCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} action={deleteCard} id={cardData.id}/>
        ))}
        <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={addCard}
          />
        </div>
      </section>
    );
  }
}

export default Column;
