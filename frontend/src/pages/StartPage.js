import React from 'react'
import styled from 'styled-components/macro'

import Searchbar from '../components/Searchbar'
// import Gallery from '../components/Gallery'

const StartPage = () => {
  return (
    <>
      <Header>
        <Image src="/assets/header-image.jpg" alt=""/>
          <TitleWrapper>
            <Title>Friluftsmat</Title>
            <TitleTwo>Laga din mat ute!</TitleTwo>
          </TitleWrapper>
      </Header>
      <InfoWrapper>
        <InfoBackground>
          <Info>Här är lite text ... Här är lite text ... Här är lite text ... Här är lite text ...</Info>
        </InfoBackground>
      </InfoWrapper>
      <Searchbar />
      {/* <Gallery /> */}
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
  font-size: 60px;
  color: #FFF;
`
const TitleTwo = styled(Title)`
  font-size: 40px;
`
const InfoWrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoBackground = styled.div`
  background-color: #999;
  width: 400px;
  height: 200px;
  padding: 20px 30px;
`
const Info = styled.p``
