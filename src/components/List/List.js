import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero.js";
import PropTypes from "prop-types";
import Column from "../Column/Column.js";
import { settings } from "../../data/dataStore";
import ReactHtmlParser from "react-html-parser";
import Creator from "../Creator/Creator.js";

class List extends React.Component {
  state = {
    columns: this.props.columns || []
  };

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array
  };

  static defaultProps = {
    description: settings.defaultListDescription
  };

  addColumn(title) {
    this.setState(state => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: "list-alt",
          cards: []
        }
      ]
    }));
  }

  addCard(title, columnId) {
    console.log('this.state', this.state);
    this.setState({
      columns: this.state.columns.map(column => {
        if (columnId === column.id) {
          const newColumnCards = column.cards.concat([ {  key: column.cards.length, title } ])
          return { ...column, cards: newColumnCards }
        }
        return column;
      })
    })
  };

  // handleDelete = itemId => {
  //   const items = this.state.cards.filter(card => card.key !== itemId);
  //   this.setState({ cards: items });
  // };

  render() {
    console.log('[List] state..', this.state.columns);
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({ id, ...columnProps }) => (
            <Column id={id} add={this.addCard.bind(this)} key={id} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => this.addColumn(title)}
          />
        </div>
      </section>
    );
  }
}

export default List;
