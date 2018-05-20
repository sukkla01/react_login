import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../component/Home'
import Login from '../component/Login/Login'
import Patient from '../component/AddNew/Patient'


export default () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route  path="/home" component={ Home } />
    <Route  path="/login" component={ Login } />
    <Route  path="/patient" component={ Patient } />
  
  </Switch>
)