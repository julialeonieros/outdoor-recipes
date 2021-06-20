import React from 'react'
import styled from 'styled-components/macro'

import Searchbar from '../components/Searchbar'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const StartPage = () => {
  return (
    <>
      <Header>
        <Image src="/assets/header-image.jpg" alt=""/>
        <TitleWrapper>
          <Title>(&thinsp;Friluftsmat&thinsp;)</Title>
          <TitleTwo>Laga din mat ute!</TitleTwo>
        </TitleWrapper>
      </Header>
      <InfoContainer>
        {/* <InfoBackground> */}
          <Info>Här är lite text ... Här är lite text ... Här är lite text ... Här är lite text ...</Info>
        {/* </InfoBackground> */}
      </InfoContainer>
      <Searchbar />
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
`
const TitleTwo = styled(Title)`
  font-size: 40px;
  font-family: 'Josefin Sans', sans-serif;
`
const InfoContainer = styled.div`
  // background-color: #668479;
  background-color: #FFDAE0;
  width: 400px;
  height: 200px;
  padding: 20px 30px;
  margin: 30px auto 40px;
`
const Info = styled.p``
