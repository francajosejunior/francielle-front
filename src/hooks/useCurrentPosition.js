import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'

export default () => {
  return useCallback(
    card => () => {
      window.navigator.geolocation.getCurrentPosition(pos =>
        console.log({ pos })
      )
    },
    []
  )
}
