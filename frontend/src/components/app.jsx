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
import SplashPage from './splash_page/splash_page';
import ReviewFormContainer from './reviews/review_form_container'
import Footer from './footer/footer';
import Team from './team/team';
import About from './about/about';
import UserProfileContainer from './user_profile/user_profile_container';
import RestaurantFormContainer from './restaurants/restaurant_form_container';

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
          <Route exact path={`/users/:userId`} component={UserProfileContainer} />
          <Route path="/samples" component={SamplesIndexContainer} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />

          <Route path="/new_restaurant" component={RestaurantFormContainer}/>

          <Route exact path="/:userId/restaurants" component={RestaurantsIndexContainer}/>
          <Route path="/restaurants" component={RestaurantsIndexContainer} />
          <Route path="/" component={SplashPage} />
        </Switch>
        <Footer fixed="bottom" />

    </div>
  );
}

export default App;