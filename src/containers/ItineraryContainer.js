import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import Header from '../components/Header'
import { ItineraryContext } from '../util/context'
import Itinerary from '../components/Itinerary'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import history from '../util/history'

const ItineraryContainer = () => {
  const [itinerary, setItinerary] = useContext(ItineraryContext)
  const removeCardFromItinerary = useRemoveCardFromItinerary(
    itinerary,
    setItinerary
  )

  const goToCardDetail = useCallback(
    cardId => () => {
      history.push(`/card/${cardId}`)
    },
    []
  )
  return (
    <Itinerary
      itinerary={itinerary}
      removeCardFromItinerary={removeCardFromItinerary}
      goToCardDetail={goToCardDetail}
    />
  )
}

export default ItineraryContainer
