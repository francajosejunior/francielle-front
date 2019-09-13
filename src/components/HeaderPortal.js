import React from 'react'
import ReactDOM from 'react-dom'

const container = document.getElementById('portal-header')
const HeaderPortal = ({ children }) => {
  return ReactDOM.createPortal(children, container)
}

export default HeaderPortal
