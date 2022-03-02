import React from 'react'
import {Redirect, Link, withRouter } from "react-router-dom"
import Logo from '../logo.png'
import "bootstrap/dist/css/bootstrap.min.css"
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            searchquery: ''
        };
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }


  componentDidMount() {
    this.props.fetchOrdersFromUser(this.props.user.id);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout()
      //   .then(this.props.history.push({
      //     pathname: '/'
      //   })
      // );
  }

  getLinks() {
    const orderCount = Object.values(this.props.orders).length
    if (this.props.loggedIn) {
      return (
          <div className="header-row">
              <Link to={'/users/:userId'} className="nav-link">Profile</Link>
              <Link to={'/samples'} className="nav-link"><FontAwesomeIcon icon={faUtensils} /> {orderCount}</Link>
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

    update(e) {
        this.setState({ searchquery: e.currentTarget.value });
    }

    handleSearch(e) {
        e.preventDefault();

        if (this.state.searchquery.length > 0) {
            this.props.history.push({
                pathname: `/search/${this.state.searchquery}`
            })
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
            <form className="d-flex" onSubmit={this.handleSearch}>
             <input className="form-control me-2" type="search"
                 placeholder="Search Samples" aria-label="Search"
                 value={this.state.searchquery} 
                 onChange={this.update} 
                 />
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

const mapStateToProps = (state, ownProps) => {

    return ({
        samples: Object.values(state.entities.samples),
       
    })
}


export default withRouter(connect(mapStateToProps, null)(NavBar));
