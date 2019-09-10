import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const container = document.getElementById('portal-header')

const Header = ({ title }) => {
  return ReactDOM.createPortal(
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{title || 'App'}</Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{ flex: 1, display: 'flex', flexDirection: 'row', height: 65 }}
      ></div>
    </>,
    container
  )
}

export default Header
