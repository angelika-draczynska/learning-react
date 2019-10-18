import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icons/Icon.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  };

  static propTypes = {
    titleText: PropTypes.node,
    icon: PropTypes.node,
    cards: PropTypes.node,
    title: PropTypes.string,
  };

  addCard(title) {
    this.setState(state => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }

  handleDelete = itemId => {
    const items = this.state.cards.filter(card => card.key !== itemId);
    this.setState({ cards: items });
  };

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        {this.state.cards.map(({ key, ...cardsProps }) => (
          <Card delete={this.handleDelete} id={key} key={key} {...cardsProps} />
        ))}
        <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={title => this.addCard(title)}
          />
        </div>
      </section>
    );
  }
}

export default Column;
