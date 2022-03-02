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
      demo: false
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


  signInDemo() {
        const demoObj = {
            email: 'demo@starting.com',
            password: 'demo-user',
        }
        const user = Object.assign({}, this.state, demoObj)
        this.props.login(user)
        this.setState({ demo: true });
    }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then(this.props.history.push(`/users/${this.props.user.id}`)); 
  }

  // Render the session errors if there are any
  renderErrors() {

    return(
      <ul>
        { this.state.demo === false ? Object.keys(this.state.errors).map((error, i) => (
          <li id='errors-li' key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        )) : <p></p> }
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
              <input className='btn' type="submit" value="login"  />
               
                <button className='demo-btn' type='submit' onClick={() => this.signInDemo()}>Demo User</button>
            
              <div className='errors-container'>
                 <div className='errors-login'>{this.renderErrors()}</div>
              </div>
              </div>
             
            </div>
          </form>
        </div>
      
      </div>
    );
  }
}

export default withRouter(LoginForm);