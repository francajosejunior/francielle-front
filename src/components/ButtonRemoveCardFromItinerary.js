import React from 'react'
import { Button } from '@material-ui/core'

const ButtonRemoveCardFromItinerary = ({ onClick }) => {
  return (
    <Button size="small" color="primary" onClick={onClick}>
      Remover da lista
    </Button>
  )
}

export default ButtonRemoveCardFromItinerary
