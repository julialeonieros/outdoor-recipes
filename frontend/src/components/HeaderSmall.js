import React from 'react'
import styled from 'styled-components/macro'

import Navbar from '../components/Navbar'

const HeaderSmall = () => {
  return (
    <>
      <ImageContainer>
        <Image src="/assets/header-image-small.jpg" alt=""/>
      </ImageContainer>
      <Navbar />
    </>
  )
}

export default HeaderSmall

const ImageContainer = styled.div`
  position: relative;
`
const Image = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;
`
