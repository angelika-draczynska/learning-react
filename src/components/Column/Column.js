import React from "react";
import styles from "./Column.scss";
import PropTypes from "prop-types";
import Creator from "../Creator/Creator.js";
import Card from "../Card/Card.js";
import { settings } from "../../data/dataStore";
import Icon from "../Icons/Icon.js";

class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // };

  static propTypes = {
    titleText: PropTypes.node
  };

  render() {
    console.log('...', this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon} /></span>{this.props.title}</h3>
        {this.props.cards.map(({ id, ...cardsProps }) => (
          <Card delete={this.handleDelete} id={id} key={id} {...cardsProps} />
        ))}
        <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={title => this.props.add(title, this.props.id)}
          />
        </div>
      </section>
    );
}
}


export default Column;
