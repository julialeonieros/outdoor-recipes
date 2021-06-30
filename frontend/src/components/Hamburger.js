import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'


const Hamburger = ({onCloseBurger}) => {

  return (
    <Menu>
    <Link to="/" style={{ textDecoration: 'none', color: 'white', padding: '50px 0' }} className="menu-item" onClick={() => onCloseBurger()}>Start</Link>
    <Link to="/kontakt" style={{ textDecoration: 'none', color: 'white', paddingBottom: '50px' }} className="menu-item" onClick={() => onCloseBurger()}>Kontakt</Link>
    <Link to="/skapa-recept" style={{ textDecoration: 'none', color: 'white', paddingBottom: '50px' }} className="menu-item" onClick={() => onCloseBurger()}>Lägg till recept</Link>
    </Menu>
  )
}

export default Hamburger

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  background: #242222e6;
  opacity: 1;
  transition: all 0.9s ease;
  padding: 50px 0;
`