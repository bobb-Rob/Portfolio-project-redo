import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = ({icon, alt}) => {
  return (
    <li>
      <a href="#">
        <img src={icon} alt={alt} />
      </a>
    </li>
  );
}

export default SocialIcon;

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
