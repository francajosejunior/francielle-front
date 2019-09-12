import React from 'react'
import { Fab } from '@material-ui/core'
import {
  Menu as MenuIcon,
  MenuOpen,
  Add,
  PictureInPicture,
  CalendarToday
} from '@material-ui/icons'
import './../scss/menu.scss'
import history from '../util/history'

const Menu = ({ open, toogleOpen }) => {
  return (
    <div className="fixed-botton-left menu">
      <div className={`menu-items ${open && 'open'}`}>
        <Fab color="primary" onClick={() => history.push('/card')}>
          <PictureInPicture />
        </Fab>
        <Fab color="primary" onClick={() => history.push('/itinerary')}>
          <CalendarToday />
        </Fab>

        <Fab
          className="menu-item-fixed primary"
          color="primary"
          onClick={toogleOpen}
        >
          <MenuIcon />
        </Fab>
        <Fab
          className="menu-item-fixed secondary"
          color="secondary"
          onClick={toogleOpen}
        >
          <MenuOpen />
        </Fab>
      </div>
    </div>
  )
}

export default Menu
