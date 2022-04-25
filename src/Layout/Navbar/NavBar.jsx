import React from 'react';
import './navbar.css';
import Hamburger from '../../components/mobileMenuBtn/hamburger';
import Logo from '../../components/Logo/Logo';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="nav-bar">
        <Logo />
        <Hamburger />
      </header>
    );
  }
}

export default Navbar;
