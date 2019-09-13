import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ListCard from './pages/ListCard'
import Itinerary from './pages/Itinerary'
import CardDetails from './pages/CardDetails'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Itinerary} />
      <Route exact path="/card" component={ListCard} />
      <Route exact path="/card/add" component={CardDetails} />
      <Route exact path="/card/:_id" component={CardDetails} />
      <Route exact path="/itinerary" component={Itinerary} />
    </Switch>
  )
}

export default Routes
