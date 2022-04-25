import React, { Component } from 'react';
import './socialIcon.css';

export class SocialIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, alt } = this.props;
    return (
      <li>
        <a href="#">
          <img src={icon} alt={alt} />
        </a>
      </li>
    );
  }
}

export default SocialIcon;
