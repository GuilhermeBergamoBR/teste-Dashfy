import React from 'react'
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Candidate from './components/Candidate'

const Routes = ()=>(
  <Router>
    <Switch>
      <Route exact path="/"> 
        <Home />
      </Route>
      <Route path="/candidate/:id">
        <Candidate />
      </Route>
    </Switch>
  </Router>
)

export default Routes