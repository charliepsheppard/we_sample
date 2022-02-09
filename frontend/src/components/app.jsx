import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './navbar/navbar'

import Login from './session/login_form';
import Signup from './session/signup_form';

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
        </Switch>

    </div>
  );
}

export default App;