import React from 'react'
import styled from 'styled-components/macro'

import Searchbar from '../components/Searchbar'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const StartPage = () => {
  return (
    <>
      <Header>
        <Image src="/assets/scenery.jpg" alt="scenery image"/>
        <TitleWrapper>
          <Title>(&thinsp;Friluftsmat&thinsp;)</Title>
          <TitleTwo>Laga din mat ute!</TitleTwo>
        </TitleWrapper>
      <Searchbar />
      </Header>
      
      <Gallery />
      <Footer />   
    </>
  )
}

export default StartPage

const Header = styled.div`
  position: relative;
`
const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`
const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Josefin Sans'
`
const Title = styled.h1`
  font-size: 95px;
  color: #FFF;
  font-family: 'brokenbrushregular';
  margin: 0;
  @media (max-width: 768px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`
const TitleTwo = styled(Title)`
  font-size: 40px;
  font-family: 'Josefin Sans', sans-serif;
  @media (max-width: 768px) {
    font-size: 34px;
  }
  @media (max-width: 500px) {
    font-size: 21px;
  }
`
