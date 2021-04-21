import React from 'react'
import Login from './containers/Login'
import Add from './containers/Add'
import Main from './containers/Main'
import BusinessDetail from './containers/BusinessDetail'

import { Switch, Route } from 'react-router'

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/add' component={Add} />
      <Route exact path='login' component={Login} />
      <Route exact path='business:id' component={BusinessDetail} />
    </Switch>
  )
}