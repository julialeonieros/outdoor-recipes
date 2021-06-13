import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { filter } from '../reducers/filter'
import {API_URL} from '../reusables/urls'
import RecipeCard from './RecipeCard'

const StartGallery = () => {

  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => setRecipe(data.data))
  },[])

  return (
    <GalleryWrapper>
      {recipe.map(recipe => (
        <RecipeCard {...recipe} key={recipe._id} />
      ))}
    </GalleryWrapper>
  )
}

export default StartGallery

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 5px pink solid;
`