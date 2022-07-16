import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './socialIcon.css';

class SocialIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <a href="#">
          <img src={this.props.icon} alt={this.props.alt} />
        </a>
      </li>
    );
  }
}

export default SocialIcon;

SocialIcon.PropTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
};
