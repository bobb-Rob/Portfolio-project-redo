import React, { Component } from 'react';
import SocialIcon from '../../components/socialMedia/socialIcon';
import gitHubIcon from '../../Assets/icons/Disabledgithub-icon.png';
import LinkedInIcon from '../../Assets/icons/DisabledLinkedIn-icon.png';
import EnabledTwoFingers from '../../Assets/icons/Enabledtwo-fingers-icon.png';
import TwitterIcon from '../../Assets/icons/Disabledtwitter-icon.png';
import MIcon from '../../Assets/icons/DisabledM-icon.png';
import './headline.css';

class Headline extends Component {
  render() {
    return (
      <section id="headline-section">
        <h1 className="headline-primary-text">Hey There. I’m Robertson</h1>
        <h4>I’am a Software Developer</h4>
        <p className="headline-desc">
          I can help you build a product , feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don’t hestiate to contact me.
        </p>

        <ul className="headline-social-media">
          <SocialIcon icon={gitHubIcon} alt="GitHub Icon" />
          <SocialIcon icon={LinkedInIcon} alt="LinkedIn Icon" />
          <SocialIcon icon={EnabledTwoFingers} alt="Icon" />
          <SocialIcon icon={TwitterIcon} alt="Twitter Icon" />
          <SocialIcon icon={MIcon} alt="M Icon" />
        </ul>
      </section>
    );
  }
}

export default Headline;
