import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './navbar/navbar_container'

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RestaurantsIndexContainer from './restaurants/restaurants_index_container';
import SamplesIndexContainer from './sample_index/sample_index_container'
import UserProfile from './user_profile/user_profile';
import ReviewFormContainer from './reviews/review_form_container'
const App = () => {
 
  return (
    <div >
      <NavBar/>

        <Switch>


          <AuthRoute exact path="/Signup" component={SignupFormContainer}
            // render={(props) => (
            //   <Signup {...props} />
            // )}
          />
          <AuthRoute exact  path="/login" component={LoginFormContainer}
            // render={(props) => (
            //   <Login {...props}/>
            // )}
          />
          <Route exact path={`/users/:userId`} component={UserProfile} />
          <Route path="/restaurants" component={RestaurantsIndexContainer} />
          <Route path="/samples" component={SamplesIndexContainer} />
          {/* <Route path="/new_restaurant" component={}/> */}
        </Switch>

    </div>
  );
}

export default App;