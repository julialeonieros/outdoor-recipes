import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Navbar = () => {

  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <NavLink>Start</NavLink>
          </Link>
        </Li>
        <Li>
          <Link to="/kontakt" style={{ textDecoration: 'none' }}>
            <NavLink>Kontakt</NavLink>
          </Link>
        </Li>
      </Ul>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <IconContainer>
            <Icon>
              <i className="fas fa-campground"></i>
            </Icon>
            <Icon>
              <i className="fas fa-tree"></i>
            </Icon>
            <Icon>
              <i className="fas fa-mountain"></i>
            </Icon>
        </IconContainer>
      </Link>
      <Ul>
        <Li>
          <Link to="/skapa-recept" style={{ textDecoration: 'none' }}>
            <NavLink>Lägg till recept</NavLink>
          </Link>
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
  padding: 18px 50px 18px 30px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: xx-large;
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`
const Icon = styled.div`
  margin-left: 7px;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 50px;
  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
const Li = styled.li`
  list-style-type: none;
  padding: 0 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`
const NavLink = styled.a`
  color: #000;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  &:hover {
    color: #013220;
  }
`
