import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Fab
} from '@material-ui/core'
import { NavigationIcon, CalendarToday } from '@material-ui/icons'

const ListCard = ({
  list = [],
  addCardToItinerary,
  removeCardToItinerary,
  goToItinerary
}) => {
  return (
    <>
      {list.map(card => {
        return (
          <React.Fragment key={card._id}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${card.name} - ${card.number}`}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {card.neighborhood}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {card.address}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`${card.city} - ${card.state}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {card.added && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={removeCardToItinerary(card)}
                  >
                    Remover da lista
                  </Button>
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
            </Card>
            <br />
          </React.Fragment>
        )
      })}
      <div className="fixed-botton-right">
        <Fab variant="extended" color="primary" onClick={goToItinerary}>
          <CalendarToday />
          Itinerário
        </Fab>
      </div>
    </>
  )
}

export default ListCard
