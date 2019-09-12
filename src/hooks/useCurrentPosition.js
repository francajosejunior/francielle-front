import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'

import { errorNotification } from '../services/notificationService'
import { getCurrentPosition } from '../services/geolocationService'
import { EMPTY_OBJECT } from '../util/constants'

export default () => {
  const [coords, setCoords] = useState(EMPTY_OBJECT)
  const getCoords = useCallback(() => {
    getCurrentPosition()
      .then(coords => setCoords(coords))
      .catch(error => errorNotification(error.toString()))
  }, [])
  return [coords, getCoords]
}
