import React from 'react'
import styled from 'styled-components/macro'

const ContactPage = () => {
  return (
    <>
      <Wrapper>
      <IMG src='/assets/DSC_4223.jpg' alt='scenery'/>
        <TextWrapper>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Odio morbi quis commodo odio aenean sed adipiscing diam. </Text>
        </TextWrapper>
      </Wrapper>
      <Green>
      </Green>
    </>
  )
}

export default ContactPage

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TextWrapper = styled.div`
  background-color: pink;
  border-radius: 8px;
  width: 400px;
  padding: 20px;
  position: absolute;
  @media (max-width: 500px) {
    width: 90%;
  }
`
const Text = styled.p`
  font-size: 14px;
`
const IMG = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`
const Green = styled.div`
  background: #013220;
  height: 20vh;
  width: 100%;
`