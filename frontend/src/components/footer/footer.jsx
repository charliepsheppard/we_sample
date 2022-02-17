import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} alt="" className="footer-logo-img" />
      <div className="footer-links-container">
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/team" className="footer-link">Team</Link>
      </div>
      <div className="github-link">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </div>
    </div>
  )
}

export default Footer;