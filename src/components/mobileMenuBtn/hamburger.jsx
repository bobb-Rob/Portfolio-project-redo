import React, { Component } from 'react';
import menuIcon from '../../Assets/icons/Icon-Menumenu-icon.png';
import './Hamburger.css';

export class Hamburger extends Component {
  render() {
    return (
      <nav>
        <button type="button" className="hamburger-btn">
          <img src={menuIcon} alt="Menu-icon" />
        </button>
      </nav>
    );
  }
}

export default Hamburger;
