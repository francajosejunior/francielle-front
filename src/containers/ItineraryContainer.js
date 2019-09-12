import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import Header from '../components/Header'
import { ItineraryContext, CardListContext } from '../util/context'
import Itinerary from '../components/Itinerary'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import history from '../util/history'

const ItineraryContainer = () => {
  const [itinerary, setItinerary] = useContext(ItineraryContext)
  const [cardList, setCardList] = useContext(CardListContext)

  const removeCardFromItinerary = useRemoveCardFromItinerary(
    itinerary,
    setItinerary
  )

  const itineraryCardList = useMemo(
    () => itinerary?.cards?.map(x => cardList?.find(c => x === c._id)),
    [itinerary.cards, cardList]
  )

  const goToCardDetail = useCallback(
    cardId => () => {
      history.push(`/card/${cardId}`)
    },
    []
  )

  return (
    <Itinerary
      cards={itineraryCardList}
      removeCardFromItinerary={removeCardFromItinerary}
      goToCardDetail={goToCardDetail}
    />
  )
}

export default ItineraryContainer
