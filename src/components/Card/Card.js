import React from "react";
import styles from "./Card.scss";

class Card extends React.Component {
  
  render() {
    console.log('this.props', this.props);
    return (
      <div className={styles.card}>
        <h2 className={styles.component}>{this.props.title}</h2>
        <button className={styles.button} onClick={() => {this.props.delete(this.props.id)}}>Delete</button>
      </div>
    );
  }
}

export default Card;
