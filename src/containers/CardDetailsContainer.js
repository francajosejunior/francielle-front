import React from 'react'
import CardDetails from '../components/CardDetails'
import useFindCardById from '../hooks/useFindCardById'

const CardDetailsContainer = ({ cardId }) => {
  const card = useFindCardById(cardId)

  return <CardDetails />
}

export default CardDetailsContainer
