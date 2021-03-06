import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  buttonContact: {
    background:'#f48fb1',
    color: '#fff',
    '&:hover': {
      background: '#ffc1e3'
    }
  }
});

const Footer = () => {

  const classes = useStyles()

  return (
    <Background>
      <FooterWrapper>
        <Header>Friluftsmat</Header>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Paragraph>
        <Link to="/kontakt" style={{ textDecoration: 'none'}}><Button variant="contained" className={classes.buttonContact}  size="large">Kontakta oss</Button></Link>
        <p>&copy; Astrid Persson & Julia Ros 2021</p>
      </FooterWrapper>
    </Background>
  )
}

export default Footer

const Background = styled.div`
  background-color: #013220;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin: 50px 0 20px;
  @media (max-width: 768px) {
    
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`
const Header = styled.h1`
`
const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 50px;
`
// const Button = styled.button`
//   font-family: 'Josefin Sans', sans-serif;
//   font-size: 17px;
//   color: #fff;
//   padding: 10px 12px;
//   border: 1px solid black;
//   border-radius: 5px;
//   background-color: #000;
//   cursor: pointer;
//   margin-bottom: 50px;
//   &:hover {
//     transition: all .5s ease-in-out;
//     background-color: #fff;
//     color: silver;
//   }
// `