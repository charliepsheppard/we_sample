import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './navbar/navbar'

import Login from './session/login_form';
import Signup from './session/signup_form';
import RestaurantsIndexContainer from './restaurants_index/restaurants_index_container';

const App = () => {
 

  return (
    <div >
      <NavBar/>

        <Switch>


          <AuthRoute exact path="/Signup" component={Signup}
            // render={(props) => (
            //   <Signup {...props} />
            // )}
          />
          <AuthRoute exact  path="/login" component={Login}
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