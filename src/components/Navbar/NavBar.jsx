import React from 'react';
import './navbar.css';
import menuIcon from '../../icons/Icon-Menumenu-icon.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="header">
        <a href="#">
          <span id="logo">Robertson Arthur</span>
        </a>
        <nav>
          <button type="button" class="header-btn">
            <img src={menuIcon} alt="Menu-icon" />
          </button>
        </nav>
      </header>
    );
  }
}

export default Navbar;
