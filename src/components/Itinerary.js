import { CardActions, Button } from '@material-ui/core'
import React from 'react'
import ButtonRemoveCardFromItinerary from './ButtonRemoveCardFromItinerary'
import CardItem from './CardItem'

const Itinerary = ({
  cards,
  distanceList,
  removeCardFromItinerary,
  goToCardDetail
}) => {
  return (
    <>
      {cards?.map(card => (
        <CardItem
          key={card._id}
          card={card}
          distance={distanceList[card._id]}
          actions={
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={goToCardDetail(card._id)}
              >
                Abrir
              </Button>
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
