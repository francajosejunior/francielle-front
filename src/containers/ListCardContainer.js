import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import ListCard from '../components/ListCard'
import api from '../services/api'
import { ItineraryContext, CardListContext } from '../util/context'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import useGoToCardDetail from '../hooks/useGoToCardDetail'

const ListCardContainer = () => {
  const [itinerary, setItinerary] = useContext(ItineraryContext)
  const [list] = useContext(CardListContext)

  const addCardToItinerary = useCallback(
    card => () => {
      api
        .post(`/itinerary/${itinerary._id}`, card)
        .then(result => setItinerary(result))
    },
    [itinerary]
  )

  const removeCardFromItinerary = useRemoveCardFromItinerary(
    itinerary,
    setItinerary
  )

  const memoList = useMemo(
    () =>
      list.map(card => {
        return {
          ...card,
          added: itinerary.cards?.some(x => x === card._id)
        }
      }),
    [list, itinerary]
  )

  const goToCardDetail = useGoToCardDetail()
  return (
    <ListCard
      list={memoList}
      addCardToItinerary={addCardToItinerary}
      removeCardFromItinerary={removeCardFromItinerary}
      goToCardDetail={goToCardDetail}
    />
  )
}

export default ListCardContainer
