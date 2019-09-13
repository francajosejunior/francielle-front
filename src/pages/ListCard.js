import { Fab } from '@material-ui/core'
import { CalendarToday } from '@material-ui/icons'
import React from 'react'
import Header from '../components/Header'
import ListCardContainer from '../containers/ListCardContainer'
import SearchableHeaderContainer from '../containers/SearchableHeaderContainer'

const ListCard = ({ history }) => {
  return (
    <>
      <Header title="Cartões" />
      <SearchableHeaderContainer />
      <ListCardContainer />
    </>
  )
}

export default ListCard
