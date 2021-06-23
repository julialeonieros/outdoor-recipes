import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'


const Hamburger = ({isOpen, onStateChange, onCloseMenu}) => {

  return (
    <Menu 
      width={'250px'}
      isOpen={isOpen}
      onClick={() => onStateChange()}
    >
    <Link to="/" className="menu-item" onClick={() => onCloseMenu()}>Start</Link>
    <Link to="/kontakt" className="menu-item" onClick={() => onCloseMenu()}>Kontakt</Link>
    <Link to="/skapa-recept" className="menu-item" onClick={() => onCloseMenu()}>Lägg till recept</Link>
    </Menu>
  )
}

export default Hamburger