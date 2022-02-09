import React from 'react';
import { withRouter } from 'react-router-dom';
import samplePic from './sample_login.png'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      business: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/offers');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

   toggleClient() {
    if(this.state.stylist) {
      this.setState({'business': false})
    }
    else {
      this.setState({'business': true})
    }
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {

    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='login-page'>
        <div className='half-left'>
        <img src={samplePic} className='pic-half-page'/>
        <h5>Share Great Experiences</h5>
        <p>Get to sample all the best food, drinks and places!</p>
       </div>
        <div className='session-form login' >
          <form onSubmit={this.handleSubmit}>
            <h3 className='session-form-title'>
            <br />
            <br />
            Login
            </h3>
             <div className = "client-business-slider">
          
              {this.state.business ? <div className = "toggle-not-selected">Client</div> : <div>Client</div>}
              <label className="switch">
              <input type="checkbox" 
              checked = {this.state.business} 
              onChange = {this.toggleClient}
              />
              <div className="slider round"></div>
              </label>
              {!this.state.business ? <div className = "toggle-not-selected">Business</div> : <div>Business</div>}
            </div>
            <div >
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <br/>
              <div className='submit-btn'>
              <input type="submit" value="login" id='btn' />
              </div>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);