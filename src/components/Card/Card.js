import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    id: PropTypes.node,
    delete: PropTypes.func,
    title: PropTypes.string,
    action: PropTypes.func,
  };
  
  render() {
    const { title } = this.props;
    return (
      <div className={styles.card}>
        <h2 className={styles.component}>{title}</h2>
        <button
          className={styles.button}
          onClick={() => {
            this.props.action(this.props.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Card;
