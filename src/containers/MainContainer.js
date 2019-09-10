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
import { ItineraryContext, CardListContext } from '../util/context'
import { EMPTY_OBJECT } from '../util/constants'
import api from '../services/api'
import useItineraryContext from '../hooks/useItineraryContext'
import useCardListContext from '../hooks/useCardListContext'

const MainContainer = () => {
  const [itinerary, setItinerary] = useItineraryContext()
  const [cardList, setCardList] = useCardListContext()

  return (
    <HashRouter>
      <CardListContext.Provider value={[cardList, setCardList]}>
        <ItineraryContext.Provider value={[itinerary, setItinerary]}>
          <Routes />
        </ItineraryContext.Provider>
      </CardListContext.Provider>
    </HashRouter>
  )
}

export default MainContainer
