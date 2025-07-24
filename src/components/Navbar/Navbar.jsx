import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import Search from '../Search/Search';
import Button from '../Button/Button';

const Navbar = () => {
  return (
  <nav className={styles.navbar}>
  <div className={styles.logoDiv}>
    <img src={Logo} alt="logo" width={67} />
  </div>
  <Search search="Search a song of your choice" />
  <Button>Give Feedback</Button>
</nav>
  );
};

export default Navbar;

