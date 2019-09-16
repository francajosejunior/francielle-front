import React from 'react'
import { Grid } from '@material-ui/core'

const Col = ({ children }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      {children}
    </Grid>
  )
}

export default Col
