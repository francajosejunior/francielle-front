import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListCardContainer from './containers/ListCardContainer'
// import New from './pages/New'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListCardContainer} />
      {/* <Route path="/new" component={New} />  */}
    </Switch>
  )
}

export default Routes
