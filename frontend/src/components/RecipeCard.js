import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

const RecipeCard = ({ _id, title, image }) => {

  return (
    <RecipeWrapper>
      <Link to={`/recipes/${_id}`}>
        <IMG 
          src={image}
          alt={title}
        />
        <Text>{title}</Text>
      </Link>
    </RecipeWrapper>
  )
}

export default RecipeCard

const RecipeWrapper = styled.div`
  
  ${'' /* margin: 30px auto;
  padding: 20px;
  margin: 20px;
  width: 250px;
  height: 250px; */}
  position: relative;
  overflow: hidden;
  width: 25%;
`
// const Imagecontainer = styled.div``

const Text = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 32px;
  text-align: center;
  padding: 12px;
  transition: all 0.5s ease;

  :hover {
    background: rgba(0, 0, 0, 0.7);
    opacity: 1;
  }  
`

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid black 1px;
`
