import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import api from '../services/api'
import { errorNotification } from '../services/notificationService'
import { CardListContext, ItineraryContext } from '../util/context'

export default callback => {
  const [list, setList] = useContext(CardListContext)
  const [itinerary, setItinerary] = useContext(ItineraryContext)

  const updateCardList = useCallback(
    result => {
      setList(
        list.map(x => {
          if (x._id === result._id) {
            return result
          }
          return x
        })
      )
    },
    [setList, list]
  )

  const updateItinerary = useCallback(
    result => {
      debugger
      api.post(`/itinerary/${itinerary._id}`, result).then(x => setItinerary(x))
    },
    [itinerary]
  )

  return useCallback(
    card => () => {
      // async save
      const asyncSave = async () => {
        try {
          const result = await api.post('card', card)
          updateCardList(result)
          updateItinerary(result)
          callback()
        } catch (error) {
          errorNotification(error)
        }
      }

      asyncSave()
    },
    [list, setList]
  )
}
