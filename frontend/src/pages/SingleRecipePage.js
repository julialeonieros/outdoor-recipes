import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useParams, Link } from 'react-router-dom'

import HeaderSmall from '../components/HeaderSmall'
// import { API_URL } from '../reusables/urls'


const SingleRecipePage = () => {

  const [singleRecipe, setSingleRecipe] = useState({})
  
  const { id } = useParams()

  const API_RECIPE_URL = `https://outdoor-recipes.herokuapp.com/recipes/${id}`
  //const API_RECIPE_URL = `${API_URL}/${id}`

  useEffect(() => {
    fetch(API_RECIPE_URL)
    .then(res => res.json())
    .then(data => {
      setSingleRecipe(data)
    })
  }, [API_RECIPE_URL])

  const ingredients = singleRecipe.ingredients
  const instructions = singleRecipe.instructions

  //console.log('row24',singleRecipe.instructions.split('.'))

  return (
    <>
      <HeaderSmall />
      <RecipeWrapper>
        <InnerWrapper>
          <IMG 
          src={singleRecipe.image}
          alt={singleRecipe.title}
          />
          <h1>{singleRecipe.title}</h1>
          <IngredientsWrapper>
            {ingredients && ingredients.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </IngredientsWrapper>
          <InstructionsWrapper>
            {instructions && instructions.split('.').map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          </InstructionsWrapper>
          <Link to="/" style={{ textDecoration: 'none', color: '#000', fontSize: '20px'}}><BACK>⏪ TILLBAKA</BACK></Link>
        </InnerWrapper>
      </RecipeWrapper>
    </>
  )
}

export default SingleRecipePage

const RecipeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto 0;
`
const IngredientsWrapper = styled.div`
  margin: 20px 0;
`
const InstructionsWrapper = styled.div`
  margin: 20px 0;
`

const IMG = styled.img`
  width: 100%;
  ${'' /* height: 200px; */}
  object-fit: cover;
  border: solid black 1px;
`
const BACK = styled.p`
`
