import { useEffect, useState } from 'react'
import { EMPTY_OBJECT, EMPTY_ARRAY } from '../util/constants'
import api from '../services/api'

export default () => {
  const [cardList, setCardList] = useState(EMPTY_ARRAY)

  useEffect(() => {
    api.get('/card').then(result => setCardList(result))
  }, [])

  return [cardList, setCardList]
}
