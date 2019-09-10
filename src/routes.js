import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListCardContainer from './containers/ListCardContainer'
import ItineraryContainer from './containers/ItineraryContainer'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListCardContainer} />
      <Route path="/itinerary" component={ItineraryContainer} />
    </Switch>
  )
}

export default Routes
