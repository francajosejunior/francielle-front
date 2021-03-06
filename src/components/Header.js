import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = ({ title, components }) => (
  <>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">{title || 'App'}</Typography>
        {components}
      </Toolbar>
    </AppBar>
    <div
      style={{ flex: 1, display: 'flex', flexDirection: 'row', height: 65 }}
    ></div>
  </>
)

export default Header
