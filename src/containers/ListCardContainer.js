import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import ListCard from '../components/ListCard'
import api from '../services/api'
import { ItineraryContext } from '../util/context'

const ListCardContainer = ({ history }) => {
  const [list, setList] = useState([])
  const [itinerary, setItinerary] = useContext(ItineraryContext)
  useEffect(() => {
    api.get('/card').then(result => setList(result))
  }, [])

  const addCardToItinerary = useCallback(
    card => () => {
      api
        .post(`/itinerary/${itinerary._id}`, card)
        .then(result => setItinerary(result))
    },
    [itinerary]
  )

  const removeCardToItinerary = useCallback(
    card => () => {
      api
        .delete(`/itinerary/${itinerary._id}/${card._id}`)
        .then(result => setItinerary(result))
    },
    [itinerary]
  )

  const memoList = useMemo(
    () =>
      list.map(card => {
        return {
          ...card,
          added: itinerary.cards?.some(x => x._id === card._id)
        }
      }),
    [list, itinerary]
  )

  const goToItinerary = useCallback(() => {
    history.push('/itinerary')
  }, [])

  return (
    <ListCard
      list={memoList}
      addCardToItinerary={addCardToItinerary}
      removeCardToItinerary={removeCardToItinerary}
      goToItinerary={goToItinerary}
    />
  )
}

export default ListCardContainer
