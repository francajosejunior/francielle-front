import { useContext, useMemo } from 'react'
import { CardListContext } from '../util/context'

export default cardId => {
  const [list] = useContext(CardListContext)

  return useMemo(() => {
    const card = list.find(x => x._id === cardId)
    return card
  }, [cardId, list])
}
