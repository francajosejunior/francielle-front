import React, { useContext, useMemo } from 'react'
import CardDetails from '../components/CardDetails'
import useFindCardById from '../hooks/useFindCardById'
import { ItineraryContext } from '../util/context'
import useSaveCard from '../hooks/useSaveCard'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import useCurrentPosition from '../hooks/useCurrentPosition'

const CardDetailsContainer = ({ cardId }) => {
  const card = useFindCardById(cardId)
  const [itinerary, setItinerary] = useContext(ItineraryContext)

  const itineraryCard = useMemo(
    () => (itinerary.cards?.some(x => x._id === card?._id) ? itinerary : null),
    [itinerary, card]
  )

  const save = useSaveCard()
  const remove = useRemoveCardFromItinerary(itinerary, setItinerary)
  const getCurrentPosition = useCurrentPosition()
  return (
    <CardDetails
      card={card}
      itinerary={itineraryCard}
      save={save}
      remove={remove}
      getCurrentPosition={getCurrentPosition}
    />
  )
}

export default CardDetailsContainer
