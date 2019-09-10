import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import { CardListContext, ItineraryContext } from '../util/context'

export default cardId => {
  const [list] = useContext(CardListContext)
  const [itinerary, setItinerary] = useContext(ItineraryContext)
  return useMemo(() => list.find(x => x._id === cardId), [cardId, list])
}
