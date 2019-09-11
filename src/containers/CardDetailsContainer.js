import React, { useContext, useMemo } from 'react'
import CardDetails from '../components/CardDetails'
import useFindCardById from '../hooks/useFindCardById'
import { ItineraryContext } from '../util/context'

const CardDetailsContainer = ({ cardId }) => {
  const card = useFindCardById(cardId)
  const [itinerary, setItinerary] = useContext(ItineraryContext)

  const itineraryCard = useMemo(
    () => (itinerary.cards?.some(x => x._id === card?._id) ? itinerary : null),
    [itinerary, card]
  )

  return <CardDetails card={card} itinerary={itineraryCard} />
}

export default CardDetailsContainer
