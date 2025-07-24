import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import Search from '../Search/Search';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <header className={styles.navbar} data-testid="navbar">
      <div className={styles.logoDiv} data-testid="navbar-logo">
        <img src={Logo} alt="Qtify Logo" width={67} />
      </div>

      <Search placeholder="Search a song of your choice" data-testid="search-bar" />

      <div data-testid="feedback-button">
        <Button>Give Feedback</Button>
      </div>
    </header>
  );
};

export default Navbar;
