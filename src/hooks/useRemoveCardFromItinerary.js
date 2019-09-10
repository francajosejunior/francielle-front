import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import api from '../services/api'

export default (itinerary, setItinerary) => {
  return useCallback(
    card => () => {
      api
        .delete(`/itinerary/${itinerary._id}/${card._id}`)
        .then(result => setItinerary(result))
    },
    [itinerary, setItinerary]
  )
}
