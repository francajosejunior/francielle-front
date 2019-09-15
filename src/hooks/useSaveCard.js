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
import { addOrUpdate } from '../util/array'
import { mapCardToApi } from '../services/cardService'

export default callback => {
  const [list, setList] = useContext(CardListContext)
  const [itinerary, setItinerary] = useContext(ItineraryContext)

  const updateCardList = useCallback(
    result => {
      setList(addOrUpdate(list, x => x?._id === result._id, result))
    },
    [setList, list]
  )

  return useCallback(
    card => () => {
      // async save
      const asyncSave = async () => {
        try {
          const result = await api.post('card', mapCardToApi(card))
          updateCardList(result)
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
