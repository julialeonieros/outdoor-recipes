import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Navbar = () => {

  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/" style={{ textDecoration: 'none', color: '#000', fontSize: '20px'}}>Start</Link>
        </Li>
        <Li>
          <Link style={{ textDecoration: 'none', color: '#000', fontSize: '20px' }}>Lägg till recept</Link>
        </Li>
        <Li>
          <Link to="/kontakt" style={{ textDecoration: 'none', color: '#000', fontSize: '20px' }}>Kontakt</Link>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background-color: rgba(255,255,255, 0.5);
  width: 100%;
  position: fixed;
  top: 0;
  padding: 18px 30px;
  z-index: 1;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`
const Li = styled.li`
  list-style-type: none;
  padding: 0 16px;
  cursor: pointer;
  
`