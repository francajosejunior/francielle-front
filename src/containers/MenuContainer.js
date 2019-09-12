import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import { withRouter } from 'react-router-dom'
import Menu from '../components/Menu'
import menuList from '../util/menuList'
import history from '../util/history'

const MenuContainer = ({ location: { pathname } }) => {
  const [open, setOpen] = useState(false)
  const toogleOpen = useCallback(() => setOpen(!open), [open])

  const list = useMemo(
    () =>
      menuList
        .filter(x => x.route !== pathname)
        .map(x => {
          return {
            ...x,
            onClick: () => {
              history.push(x.route)
              toogleOpen()
            }
          }
        }),
    [pathname, toogleOpen]
  )

  return <Menu open={open} toogleOpen={toogleOpen} list={list} />
}

export default withRouter(MenuContainer)
