import React from 'react';
import { Link } from 'react-router-dom';
import banner from './splash_page_banner.jpg';

class SplashPage extends React.Component{
  render() {
    return (
      <div>
        <div className="splash-page-container">
          <div className="splash-page-banner-container">
            <img src={banner} alt="" className="splash-page-banner-img" />
          </div>
          <div className="splash-page-heading-container">
            <h1 className="splash-page-heading">Sample from the best around town</h1>
            {/* searchbar goes here */}
            {this.props.user ?
              <Link id='get-started-link' to={`/user/${this.props.user.id}`}>
                <p>Click to get started</p>
              </Link> : <p></p>
            }
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
}

export default SplashPage;