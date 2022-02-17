import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="social-menu">
      {/* <img src={Logo} alt="" className="footer-logo-img" /> */}
      {/* <div className="footer-links-container"> */}
        <ul>
           <li><FontAwesomeIcon icon={faGithub} className="github-icon" /></li>
           <li><Link to="/about" className="footer-link">About</Link></li>
           <li><Link to="/team" className="footer-link">Team</Link></li>
          {/* </div> */}
            {/* <div className="github-link"> */}
            {/* </div> */}
      </ul>
      <p className="copyright">Built by Charlie Sheppard, Jack Tomasik and Thiago Moura  © 2022</p>
    </div>
  )
}

export default Footer;