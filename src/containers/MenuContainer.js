import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import Menu from '../components/Menu'

const MenuContainer = () => {
  const [open, setOpen] = useState(false)
  const toogleOpen = useCallback(() => setOpen(!open), [open])
  return <Menu open={open} toogleOpen={toogleOpen} />
}

export default MenuContainer
