import React, { useContext, useMemo, useState, useEffect } from 'react'
import CardDetails from '../components/CardDetails'
import useFindCardById from '../hooks/useFindCardById'
import { ItineraryContext } from '../util/context'
import useSaveCard from '../hooks/useSaveCard'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import useCurrentPosition from '../hooks/useCurrentPosition'
import history from '../util/history'
import useNavigateTo from '../hooks/useNavigateTo'

const onSaveCallback = () => history.push('/card')

const CardDetailsContainer = ({ cardId }) => {
  const card = useFindCardById(cardId)
  const [coordsChanges, setCoordsChanges] = useState(-1)
  const [itinerary, setItinerary] = useContext(ItineraryContext)

  const itineraryCard = useMemo(
    () => (itinerary.cards?.some(x => x._id === card?._id) ? itinerary : null),
    [itinerary, card]
  )

  const save = useSaveCard(onSaveCallback)
  const remove = useRemoveCardFromItinerary(itinerary, setItinerary)
  const [coords, getCurrentPosition] = useCurrentPosition()
  const navigate = useNavigateTo()
  useEffect(() => setCoordsChanges(coordsChanges + 1), [coords])
  return (
    <CardDetails
      card={{ ...card, ...coords }}
      coordsChanges={coordsChanges}
      itinerary={itineraryCard}
      save={save}
      remove={remove}
      getCurrentPosition={getCurrentPosition}
      navigate={navigate}
    />
  )
}

export default CardDetailsContainer
