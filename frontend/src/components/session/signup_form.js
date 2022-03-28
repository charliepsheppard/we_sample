import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import samplePic from './sample_login.png'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {},
      business: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/profile');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // this.props.signup(user, this.props.history); 
    this.props.signup(user); 
    this.componentWillReceiveProps();
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li id='errors-li' key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log('signup form', this.props);
    return (

      <div className='signin-page'>
        <div className='half-left'>
        <img src={samplePic} className='pic-half-page'/>
        <h5>Share Great Experiences</h5>
        <p>Get to sample all the best food, drinks and places!</p>
       </div>
      <div className="session-form signup" id='signup-form'>
        <form onSubmit={this.handleSubmit}>
          <h3 className='session-form-title'>
            <br />
            <br />
            Sign up
            </h3>
          <div className="signup-form">
            <br/>
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
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <div className='submit-btn'>
            <input type="submit" value="Submit" id='btn' />
            <div className='errors-container'>
                <div className='errors-login'>{this.renderErrors()}</div>
            </div>
            </div>
            <p>Have an account or demo user?
            </p>
            <Link to={'/login'}>Click Here</Link>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);