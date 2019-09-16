import React from 'react'
import { Grid } from '@material-ui/core'

const Row = ({ children }) => {
  return (
    <Grid container spacing={1}>
      {children}
    </Grid>
  )
}

export default Row
