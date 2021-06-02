import React from 'react'

import styled from 'styled-components/macro'

const Footer = () => {
  return (
    <Background>This is a footer</Background>
  )
}

export default Footer

const Background = styled.div`
  background-color: #999;
  width: 100%;
  height: 100px;
  padding: 30px;
`
