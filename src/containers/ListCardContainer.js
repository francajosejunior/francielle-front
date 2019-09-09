import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import ListCard from '../components/ListCard'
import api from '../services/api'

const ListCardContainer = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    api.get('/card').then(result => setList(result))
  }, [])

  const addCardToItinerary = useCallback(
    _id => () => {
      console.log(_id)
    },
    []
  )

  return <ListCard list={list} addCardToItinerary={addCardToItinerary} />
}

export default ListCardContainer
