import React from 'react'
import styled from 'styled-components/macro'

import HeaderSmall from '../components/HeaderSmall'

const ContactPage = () => {
  return (
    <>
      <HeaderSmall />
      <TextWrapper>
        <Text>Here is some contact-information</Text>
      </TextWrapper>
    </>
  )
}

export default ContactPage

const TextWrapper = styled.div`
  background-color: pink;
  height: 100px;
  width: 100%;
  padding: 30px;
`
const Text = styled.p``
