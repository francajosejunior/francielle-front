import { Fab } from '@material-ui/core'
import { CalendarToday } from '@material-ui/icons'
import React from 'react'
import Header from '../components/Header'
import ListCardContainer from '../containers/ListCardContainer'

const ListCard = ({ history }) => {
  return (
    <>
      <Header title="Cartões" />
      <ListCardContainer />
      <div className="fixed-botton-right">
        <Fab
          variant="extended"
          color="primary"
          onClick={() => history.push('/itinerary')}
        >
          <CalendarToday />
          Itinerário
        </Fab>
      </div>
    </>
  )
}

export default ListCard
