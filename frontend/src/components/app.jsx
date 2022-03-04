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
import Modal from '../components/modal/modal';
import SearchedSamples from './searched_samples';
import ReviewEditFormContainer from './reviews/review_edit_form_container';


const App = () => {

  return (
    <div >
      <Modal />
      <NavBar/>

        <Switch>


          <AuthRoute exact path="/signup" component={SignupFormContainer}
            // render={(props) => (
            //   <Signup {...props} />
            // )}
          />
          <AuthRoute exact  path="/login" component={LoginFormContainer}
            // render={(props) => (
            //   <Login {...props}/>
            // )}
          />
          <ProtectedRoute exact path={`/users/:userId`} component={UserProfileContainer} />
          <ProtectedRoute path="/samples" component={SamplesIndexContainer} />
          <ProtectedRoute path="/reviews/:reviewId/edit" component={ReviewEditFormContainer} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <ProtectedRoute path="/search/:searchQuery" component={SearchedSamples} />
          <ProtectedRoute path="/new_restaurant" component={RestaurantFormContainer}/>
          <ProtectedRoute exact path="/:userId/restaurants" component={RestaurantsIndexContainer}/>
          <ProtectedRoute path="/restaurants" component={RestaurantsIndexContainer} />
          <Route path="/" component={SplashPage} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer  />

    </div>
  );
}

export default App;