import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import charlieGH from './charlie_github.jpeg';
import jackGH from './jack_github.jpeg';
import thiagoGH from './thiago_github.jpeg';

const Team = () => {
  return (
    <div>
      <h1>The Team</h1>
      <div className="team-container">
        <div className="teammate-container">
          <img src={charlieGH} alt="charlie-profile-photo" className="team-profile-photo" />
          <div className="team-info">
            <h2 className="team-name">Charlie Sheppard</h2>
            <div className="team-social-links">
              <a href="https://github.com/charliepsheppard" target="_blank" className="social-link"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/charlespsheppard/" target="_blank" className="social-link"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="teammate-container">
          <img src={jackGH} alt="jack-profile-photo" className="team-profile-photo" />
          <div className="team-info">
            <h2 className="team-name">Jack Tomasik</h2>
            <div className="team-social-links">
              <a href="https://github.com/j-tomasik" target="_blank" className="social-link"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/jack-tomasik-530ab816b/" target="_blank" className="social-link"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="teammate-container">
          <img src={thiagoGH} alt="thiago-profile-photo" className="team-profile-photo" />
          <div className="team-info">
            <h2 className="team-name">Thiago Miglioranzi Moura</h2>
            <div className="team-social-links">
              <a href="https://github.com/ThiagoDe" target="_blank" className="social-link"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/tmigli/" target="_blank"><FaLinkedin className="social-link" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;