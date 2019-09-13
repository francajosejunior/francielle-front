import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import { CardListContext, ItineraryContext } from '../util/context'
import { REFRESH_INTERVAL } from '../util/constants'
import useInterval from './useInterval'
import { getCurrentPosition } from '../services/geolocationService'
import { getDistanceFromLatLonInKm } from '../services/distanceCalcService'

const REFRESH_INTERVAL_MS = REFRESH_INTERVAL * 1000

export default itineraryCardList => {
  const [distanceList, setDistanceList] = useState({})
  useInterval(async () => {
    const currentCoords = await getCurrentPosition()

    const list = {}

    itineraryCardList?.forEach(card => {
      const { _id } = card
      const distance = getDistanceFromLatLonInKm(
        currentCoords.latitude,
        currentCoords.longitude,
        card.latitude,
        card.longitude
      )

      list[_id] = isNaN(distance) ? 0 : distance.toFixed(2)
    })

    setDistanceList(list)
  }, REFRESH_INTERVAL_MS)
  return distanceList
}
