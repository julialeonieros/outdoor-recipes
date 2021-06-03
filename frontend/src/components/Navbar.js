import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Navbar = () => {
  return (
    <Nav>
      <BrowserRouter>
        <Links>
          <Link to="/">
            <Li>Start</Li>
          </Link>
          <Link>
            <Li>Lägg till recept</Li>
          </Link> 
          <Link to="kontakt">
            <Li>Kontakt</Li>
          </Link>   
        </Links>
      </BrowserRouter>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background-color: #FFF;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 5px 30px;
  z-index: 1;
`
const Links = styled.ul`
  display: flex;
  flex-direction: row;
`
const Li = styled.li`
  text-decoration: none;
  list-style-type: none;
  padding: 0 16px;
  cursor: pointer;
`