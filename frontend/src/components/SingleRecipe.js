import React from 'react'

import styled from 'styled-components/macro'

const SingleRecipe = () => {
  return (
    <RecipeWrapper>
      <Text>Here is a recipe</Text>
    </RecipeWrapper>
  )
}

export default SingleRecipe

const RecipeWrapper = styled.div`
  border: solid black 1px;
  margin: 30px auto;
  padding: 20px;
  margin: 20px;
  width: 250px;
  height: 250px;
`
const Text = styled.p``
