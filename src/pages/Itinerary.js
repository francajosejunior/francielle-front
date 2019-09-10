import React from 'react'
import ItineraryContainer from '../containers/ItineraryContainer'
import Header from '../components/Header'

const Itinerary = () => {
  return (
    <>
      <Header title="Itinerario de hoje" />
      <ItineraryContainer />
    </>
  )
}

export default Itinerary
