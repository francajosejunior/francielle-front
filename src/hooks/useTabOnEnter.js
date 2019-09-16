import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useMemo
} from 'react'

export default () => {
  const containerRef = useRef(null)

  const onEnter = useCallback(event => {
    if (event.which === 13) {
      const container = containerRef.current
      const inputs = container.getElementsByTagName('input')
      let i = 0,
        len = inputs.length,
        indexToFocus = 0
      for (; i < len; i++) {
        const element = inputs[i]
        if (element === document.activeElement) {
          indexToFocus = i + 1
          if (indexToFocus === len) {
            indexToFocus = 0
          }
        }
      }

      inputs[indexToFocus].focus()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onEnter, false)
    return () => {
      window.removeEventListener('keydown', onEnter, false)
    }
  }, [])

  return containerRef
}
