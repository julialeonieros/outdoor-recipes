import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'

import HeaderSmall from '../components/HeaderSmall'
// import { API_URL } from '../reusables/urls'
// import SingleRecipe from '../components/RecipeCard'

const SingleRecipePage = () => {

  const [singleRecipe, setSingleRecipe] = useState({})
  
  const { id } = useParams()

  const API_RECIPE_URL = `https://outdoor-recipes.herokuapp.com/recipes/${id}`
  //const API_RECIPE_URL = `${API_URL}/${id}`

  useEffect(() => {
    fetch(API_RECIPE_URL)
    .then(res => res.json())
    .then(data => setSingleRecipe(data))
  }, [API_RECIPE_URL])

  console.log(singleRecipe)

  return (
    <>
      <HeaderSmall />
      <RecipeWrapper>
        <>
        <IMG 
          src={singleRecipe.image}
          alt={singleRecipe.title}
        />
        </>
      </RecipeWrapper>
    </>
  )
}

export default SingleRecipePage

const RecipeWrapper = styled.div`
  border: solid purple 3px;
  display: flex;
  flex-flow: row-wrap;
`
const IMG = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: solid black 1px;
`
