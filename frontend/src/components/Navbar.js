import React from 'react'

import styled from 'styled-components/macro'

const Navbar = () => {
  return (
    <Nav>
      <Links>
        <Li>Start</Li>
        <Li>Lägg till recept</Li> 
        <Li>Kontakt</Li>   
      </Links>
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