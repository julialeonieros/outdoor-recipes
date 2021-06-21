import React from 'react'
// import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

// import { filter } from '../reducers/filter'
// import {API_URL} from '../reusables/urls'
import RecipeCard from './RecipeCard'

const FilteredGallery = () => {

  const recipe = useSelector((store) => store.filter.recipeArray)
  // console.log('recipe', recipe[0])

  return (
    <GalleryWrapper>
      {recipe[0].map(recipe => (
        <RecipeCard {...recipe} key={recipe._id} />
      ))}
    </GalleryWrapper>
  )
}

export default FilteredGallery

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`