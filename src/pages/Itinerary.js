import React from 'react'
import ItineraryContainer from '../containers/ItineraryContainer'
import Header from '../components/Header'
import SearchableHeaderContainer from '../containers/SearchableHeaderContainer'

const Itinerary = () => {
  return (
    <>
      <Header title="Itinerario de hoje" />
      <SearchableHeaderContainer />
      <ItineraryContainer />
    </>
  )
}

export default Itinerary
