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

const Menu = ({ open, toogleOpen, list }) => {
  return (
    <div className="fixed-botton-right menu">
      <div className={`menu-items ${open && 'open'}`}>
        {list.map(({ route, onClick, icon: Icon }) => (
          <Fab
            key={route}
            color="primary"
            className="menu-item"
            onClick={onClick}
          >
            <Icon />
          </Fab>
        ))}

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
