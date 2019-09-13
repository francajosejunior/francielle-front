import React, { useContext, useMemo } from 'react'
import Itinerary from '../components/Itinerary'
import useDistanceCalc from '../hooks/useDistanceCalc'
import useGoToCardDetail from '../hooks/useGoToCardDetail'
import useRemoveCardFromItinerary from '../hooks/useRemoveCardFromItinerary'
import { CardListContext, ItineraryContext } from '../util/context'

const ItineraryContainer = () => {
  const [itinerary, setItinerary] = useContext(ItineraryContext)
  const [cardList, setCardList] = useContext(CardListContext)

  useDistanceCalc()

  const removeCardFromItinerary = useRemoveCardFromItinerary(
    itinerary,
    setItinerary
  )

  const itineraryCardList = useMemo(() => {
    return itinerary?.cards?.map(x => cardList?.find(c => x === c._id))
  }, [itinerary.cards, cardList])

  const distanceList = useDistanceCalc(itineraryCardList)

  const goToCardDetail = useGoToCardDetail()

  return (
    <Itinerary
      cards={itineraryCardList}
      distanceList={distanceList}
      removeCardFromItinerary={removeCardFromItinerary}
      goToCardDetail={goToCardDetail}
    />
  )
}

export default ItineraryContainer
