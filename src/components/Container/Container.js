import React from 'react';
import styles from './Container.scss';


class Container extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
