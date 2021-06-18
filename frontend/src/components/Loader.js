import React from 'react'
import styled from 'styled-components/macro'

const Loader = () => {

  return (
    <Container>
      <lottie-player 
        src="https://assets6.lottiefiles.com/temp/lf20_Oxq57H.json"  
        background="transparent"  
        speed="1"  
        style={{ width: '300px', height: '300px' }}  
        loop 
        autoplay
      >
      </lottie-player>
    </Container>
  )
}

export default Loader

const Container = styled.div`
  background-color: #668479;
  display: flex;
  flex-direction: center;
  align-items: center;
`
