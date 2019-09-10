import React from 'react'
import {
  Card,
  CardActionArea,
  Typography,
  CardContent
} from '@material-ui/core'

const CardItem = ({ card, actions, onClick }) => {
  return (
    <Card onClick={onClick}>
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
      {actions}
    </Card>
  )
}

export default CardItem
