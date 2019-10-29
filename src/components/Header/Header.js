import React from 'react';
import styles from './Header.scss';
import Container from '../Container/Container';
import { NavLink, Link } from 'react-router-dom';
import { settings } from '../../data/dataStore';
import Icon from '../Icons/Icon';
import Search from '../Search/Search';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} exact='true' to='/'>
              <Icon name={settings.navigationIcon}/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
            <Search />
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
