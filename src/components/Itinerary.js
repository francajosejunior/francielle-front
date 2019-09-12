import { CardActions } from '@material-ui/core'
import React from 'react'
import ButtonRemoveCardFromItinerary from './ButtonRemoveCardFromItinerary'
import CardItem from './CardItem'

const Itinerary = ({ cards, removeCardFromItinerary, goToCardDetail }) => {
  return (
    <>
      {cards?.map(card => (
        <CardItem
          onClick={goToCardDetail(card._id)}
          key={card._id}
          card={card}
          actions={
            <CardActions>
              <ButtonRemoveCardFromItinerary
                onClick={removeCardFromItinerary(card)}
              />
            </CardActions>
          }
        />
      ))}
    </>
  )
}

export default Itinerary
