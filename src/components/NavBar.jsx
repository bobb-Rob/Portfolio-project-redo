import React from 'react';
import '../styles/navbar.css';
import Hamburger from './hamburger';
import Logo from './Logo';

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
