import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import { HashRouter } from 'react-router-dom'
import Header from '../components/Header'
import Routes from '../routes'
import { ItineraryContext } from '../util/context'
import { EMPTY_OBJECT } from '../util/constants'
import api from '../services/api'
import useItineraryContext from '../hooks/useItineraryContext'

const MainContainer = () => {
  const [itinerary, setItinerary] = useItineraryContext()

  return (
    <HashRouter>
      <ItineraryContext.Provider value={[itinerary, setItinerary]}>
        <Header />
        <Routes />
      </ItineraryContext.Provider>
    </HashRouter>
  )
}

export default MainContainer
