import React, { useContext } from 'react'
import CardDetails from '../components/CardDetails'
import useFindCardById from '../hooks/useFindCardById'
import { ItineraryContext } from '../util/context'

const CardDetailsContainer = ({ cardId }) => {
  const card = useFindCardById(cardId)
  const [itinerary, setItinerary] = useContext(ItineraryContext)

  return <CardDetails card={card} itinerary={itinerary} />
}

export default CardDetailsContainer
