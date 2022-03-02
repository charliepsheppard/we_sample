import React from 'react';
import { Link } from 'react-router-dom';
import banner from './splash_page_banner.jpg';

const SplashPage = () => {
  return (
    <div>
    <div className="splash-page-container">
      <div className="splash-page-banner-container">
        <img src={banner} alt="" className="splash-page-banner-img" />
      </div>
      <div className="splash-page-heading-container">
        <h1 className="splash-page-heading">Sample from the best around town</h1>
        {/* searchbar goes here */}
          {/* <Link id='get-started-link'>
            <p>Click to get started</p>
          </Link> */}
          <p className="instructions">Click profile to get started</p>
      </div>
     
    </div>
     <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default SplashPage;