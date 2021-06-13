import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { filter } from '../reducers/filter'
import {API_URL} from '../reusables/urls'
import RecipeCard from './RecipeCard'
import StartGallery from './StartGallery'
import FilteredGallery from '../components/FilteredGallery'

const Gallery = () => {
 
  const isFiltering = useSelector((store) => store.filter.isFiltering)

  return (
    <>
    {!isFiltering && <StartGallery />}
    {isFiltering && <FilteredGallery />}
    </>
   )
 }

export default Gallery

// const GalleryWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `