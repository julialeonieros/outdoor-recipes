import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_URL } from '../reusables/urls'
import RecipeCard from './RecipeCard'
import Loader from '../components/Loader'

const StartGallery = () => {

  const [recipe, setRecipe] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.data)
        setLoading(false)
      })
  },[])

  return (
    <>
      {loading && <Loader />}

      {!loading &&
        <GalleryWrapper>
          {recipe.map(recipe => (
            <RecipeCard {...recipe} key={recipe._id} />
          ))}
        </GalleryWrapper>
      }
    </>
  )
}

export default StartGallery

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
