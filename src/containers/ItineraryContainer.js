import React, { useContext, useMemo } from 'react'
import Itinerary from '../components/Itinerary'
import useDistanceCalc from '../hooks/useDistanceCalc'
import useGoToCardDetail from '../hooks/useGoToCardDetail'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import {
  CardListContext,
  ItineraryContext,
  SearchTextContext
} from '../util/context'
import { filterCardBySearch } from '../services/filterService'
import useNavigateTo from '../hooks/useNavigateTo'

const ItineraryContainer = () => {
  const [searchText] = useContext(SearchTextContext)
  const [itinerary, setItinerary] = useContext(ItineraryContext)
  const [cardList, setCardList] = useContext(CardListContext)

  useDistanceCalc()

  const removeCardFromItinerary = useRemoveCardFromItinerary(
    itinerary,
    setItinerary
  )

  const itineraryCardList = useMemo(() => {
    return itinerary?.cards
      ?.map(x => cardList?.find(c => x === c._id))
      .filter(filterCardBySearch(searchText))
  }, [itinerary.cards, cardList, searchText])

  const distanceList = useDistanceCalc(itineraryCardList)

  const goToCardDetail = useGoToCardDetail()
  const navigate = useNavigateTo()
  return (
    <Itinerary
      cards={itineraryCardList}
      distanceList={distanceList}
      removeCardFromItinerary={removeCardFromItinerary}
      goToCardDetail={goToCardDetail}
      navigate={navigate}
    />
  )
}

export default ItineraryContainer
