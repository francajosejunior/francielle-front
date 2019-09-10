import React from 'react'
import Header from '../components/Header'
import CardDetailsContainer from '../containers/CardDetailsContainer'

const CardDetails = ({ match }) => {
  return (
    <>
      <Header title="Detalhes Do Cartão" />
      <CardDetailsContainer cardId={match.params._id} />
    </>
  )
}

export default CardDetails
