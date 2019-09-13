import { useCallback } from 'react'
import history from '../util/history'
export default () =>
  useCallback(
    cardId => () => {
      history.push(`/card/${cardId}`)
    },
    []
  )
