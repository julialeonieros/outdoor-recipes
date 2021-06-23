import { React } from 'react'
import { useSelector } from 'react-redux'

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