import React from 'react'
import styled from 'styled-components/macro'

const HeaderSmall = () => {
  return (
    <>
      <ImageContainer>
        <Image src="/assets/header-image-small.jpg" alt=""/>
      </ImageContainer>
    </>
  )
}

export default HeaderSmall

const ImageContainer = styled.div`
  position: relative;
`
const Image = styled.img`
  width: 100vw;
  height: 40vh;
  object-fit: cover;
`
