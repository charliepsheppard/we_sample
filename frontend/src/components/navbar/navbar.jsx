import React from 'react'
import {Switch, Route, Link } from "react-router-dom"
import Logo from '../logo.png'
import "bootstrap/dist/css/bootstrap.min.css"
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      console.log(this.props);
      return (
          <div className="header-row">
              <Link to={'/profile'} className="nav-link">Profile</Link>
              <Link to={'/samples'} className="nav-link">View Samples</Link>
              <button onClick={this.logoutUser} className="logout-btn">Logout</button>
          </div>
      );
    } else {
      return (
          <div className='header-row'>
              <Link to={'/signup'} className="nav-link" >Signup</Link>
              
              <Link to={'/login'} className="nav-link ">Login</Link>
          </div>
      );
    }
  }

  render() {
    const user = null

    return (
         <div >
      
      <nav className="navbar navbar-expand-lg navbar-light bs-ligh border-bottom">
         <div className="container-fluid">
           <a className="navbar-brand" href="/">
           <img src={Logo} className="navbar-brand"></img>
           </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse position-absolute top-10 end-0" id="navbarSupportedContent">
            <form className="d-flex">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  {/* { user ? (
                      <a onClick={logout} className="nav-link" style={{cursor: 'pointer'}}>
                          Logout {user.name}
                      </a>
                  ) : (
                <Link to={"/login"} className="nav-link active" >
                    Login
                </Link>
                )} */}
             
              </li>
              <li className="nav-item">
                  { this.getLinks() }
                {/* <Link to={"/signup"} className="nav-link" >Signup</Link> */}
              </li>
            
              
          </ul>
         
        </div>
      </div>
    </nav>
    
    </div>
    )
  }
}

export default NavBar;
