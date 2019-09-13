import { useCallback } from 'react'
import { LINK_GOOGLE_MAPS } from '../util/constants'
export default () => {
  return useCallback(
    card => () => {
      window.open(
        `${LINK_GOOGLE_MAPS}${card.address} ${card.number} ${card.neighborhood} ${card.city} ${card.latitude} ${card.longitude}`,
        '_blank'
      )
    },
    []
  )
}
