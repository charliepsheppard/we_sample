import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './navbar/navbar'

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RestaurantsIndexContainer from './restaurants_index/restaurants_index_container';

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
          <Route path="/restaurants" component={RestaurantsIndexContainer} />
        </Switch>

    </div>
  );
}

export default App;