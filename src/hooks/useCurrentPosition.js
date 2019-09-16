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
  const [cardWithCoords, setCoords] = useState(EMPTY_OBJECT)
  const getCoords = useCallback(
    card => () => {
      getCurrentPosition()
        .then(coords => setCoords({ ...card, ...coords }))
        .catch(error => errorNotification(error.toString()))
    },
    []
  )
  return [cardWithCoords, getCoords]
}
