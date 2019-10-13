import React from "react";
import styles from "./Card.scss";


class Card extends React.Component {

  render() {
    return (
        <h2 className={styles.component}>{this.props.title}</h2>
    );
  }
}

export default Card;
