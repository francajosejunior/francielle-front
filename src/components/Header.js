import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">App</Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{ flex: 1, display: 'flex', flexDirection: 'row', height: 65 }}
      ></div>
    </>
  )
}

export default Header
