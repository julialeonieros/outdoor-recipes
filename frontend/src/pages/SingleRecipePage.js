import React from 'react'
import styled from 'styled-components/macro'

import HeaderSmall from '../components/HeaderSmall'
import SingleRecipe from '../components/SingleRecipe'

const SingleRecipePage = () => {
  return (
    <>
      <HeaderSmall />
      <RecipeWrapper>
        <SingleRecipe />
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
