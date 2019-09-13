import React from 'react'
import {
  Card,
  CardActionArea,
  Typography,
  CardContent
} from '@material-ui/core'
import './../scss/card-item.scss'

const CardItem = ({ card, distance, actions }) => {
  return (
    <Card className="card-item">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {`${card.name} - ${card.number}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5">
            {card.neighborhood}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5">
            {card.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5">
            {`${card.city} - ${card.state}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5">
            {`${card.latitude} , ${card.longitude}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h4">
            {!!distance && <>Distancia: {distance} km</>}
          </Typography>
        </CardContent>
      </CardActionArea>
      {actions}
    </Card>
  )
}

export default CardItem
