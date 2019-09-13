import { Button, CardActions } from '@material-ui/core'
import React from 'react'
import ButtonRemoveCardFromItinerary from './ButtonRemoveCardFromItinerary'
import CardItem from './CardItem'

const ListCard = ({
  list = [],
  addCardToItinerary,
  removeCardFromItinerary,
  goToCardDetail
}) => {
  return (
    <>
      {list.map(card => {
        return (
          <CardItem
            key={card._id}
            card={card}
            actions={
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={goToCardDetail(card._id)}
                >
                  Abrir
                </Button>
                {card.added && (
                  <ButtonRemoveCardFromItinerary
                    onClick={removeCardFromItinerary(card)}
                  />
                )}
                {!card.added && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={addCardToItinerary(card)}
                  >
                    Visitar hoje
                  </Button>
                )}
              </CardActions>
            }
          />
        )
      })}
    </>
  )
}

export default ListCard
