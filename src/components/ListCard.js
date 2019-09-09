import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'

const ListCard = ({ list = [], addCardToItinerary }) => {
  console.log({ list })
  return list.map(card => {
    return (
      <React.Fragment key={card._id}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {`${card.name} - ${card.number}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.neighborhood}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.address}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`${card.city} - ${card.state}`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={addCardToItinerary(card._id)}
            >
              Visitar hoje
            </Button>
          </CardActions>
        </Card>
        <br />
      </React.Fragment>
    )
  })
}

export default ListCard
