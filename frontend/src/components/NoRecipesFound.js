import React from 'react'
import styled from 'styled-components/macro'

const NoRecipesFound = () => {
  return (
    <Container>
      <Text>Inga recept hittades!</Text>
      <lottie-player 
      src="https://assets10.lottiefiles.com/private_files/lf30_hhhuwhsh.json"  
      background="transparent"  
      speed="1"  
      style={{width: '300px', height: '300px'}} 
      loop autoplay>
      </lottie-player>
    </Container>
  )
}

export default NoRecipesFound

const Container = styled.div`
  background-color: #668479;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.h3`
  padding-top: 30px;
  font-size: 25px;
`