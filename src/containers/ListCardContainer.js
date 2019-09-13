import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import ListCard from '../components/ListCard'
import api from '../services/api'
import {
  ItineraryContext,
  CardListContext,
  SearchTextContext
} from '../util/context'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import useGoToCardDetail from '../hooks/useGoToCardDetail'
import { filterCardBySearch } from '../services/filterService'
import useNavigateTo from '../hooks/useNavigateTo'

const ListCardContainer = () => {
  const [searchText] = useContext(SearchTextContext)
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
      list.filter(filterCardBySearch(searchText)).map(card => {
        return {
          ...card,
          added: itinerary.cards?.some(x => x === card?._id)
        }
      }),
    [list, itinerary, searchText]
  )

  const goToCardDetail = useGoToCardDetail()
  const navigate = useNavigateTo()

  return (
    <ListCard
      list={memoList}
      addCardToItinerary={addCardToItinerary}
      removeCardFromItinerary={removeCardFromItinerary}
      goToCardDetail={goToCardDetail}
      navigate={navigate}
    />
  )
}

export default ListCardContainer
