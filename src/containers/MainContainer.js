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
import {
  ItineraryContext,
  CardListContext,
  SearchTextContext
} from '../util/context'
import { EMPTY_OBJECT } from '../util/constants'
import api from '../services/api'
import useItineraryContext from '../hooks/useItineraryContext'
import useCardListContext from '../hooks/useCardListContext'
import MenuContainer from './MenuContainer'

const MainContainer = () => {
  const [cardList, setCardList] = useCardListContext()
  const [itinerary, setItinerary] = useItineraryContext(cardList)
  const [searchText, setSearchText] = useState('')

  return (
    <HashRouter>
      <CardListContext.Provider value={[cardList, setCardList]}>
        <ItineraryContext.Provider value={[itinerary, setItinerary]}>
          <SearchTextContext.Provider value={[searchText, setSearchText]}>
            <Routes />
            <MenuContainer />
          </SearchTextContext.Provider>
        </ItineraryContext.Provider>
      </CardListContext.Provider>
    </HashRouter>
  )
}

export default MainContainer
