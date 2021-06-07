import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import uniqid from 'uniqid'

const Navbar = () => {
  const id = uniqid()

  return (
    <Nav>
      <Ul>
        <Li>
          <Link key={id} to='/'>Start</Link>
        </Li>
        <Li>
          <Link>Lägg till recept</Link>
        </Li>
        <Li>
          <Link key={id} to='/kontakt'>Kontakt</Link>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background-color: #FFF;
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
  text-decoration: none;
  list-style-type: none;
  padding: 0 16px;
  cursor: pointer;
`