import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

const RecipeCard = ({ _id, title, imageUrl }) => {

  return (
    <RecipeWrapper>
      <Link to={`/recipes/${_id}`}>
        <IMG 
          src={imageUrl}
          alt={title}
        />
        <Text>{title}</Text>
      </Link>
    </RecipeWrapper>
  )
}

export default RecipeCard

const RecipeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 33.333%;
  @media (max-width: 768px) {
    
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`

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
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
