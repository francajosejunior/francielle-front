import { useEffect, useState } from 'react'
import { EMPTY_OBJECT } from '../util/constants'
import api from '../services/api'

export default () => {
  const [itinerary, setItinerary] = useState(EMPTY_OBJECT)

  useEffect(() => {
    api
      .get(`itinerary/${new Date().toISOString()}`)
      .then(result => setItinerary(result))
  }, [])

  return [itinerary, setItinerary]
}
