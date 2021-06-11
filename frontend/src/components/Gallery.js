import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

// import { Link } from 'react-router-dom' 
import { filter } from '../reducers/filter'
import {API_URL} from '../reusables/urls'
import RecipeCard from './RecipeCard'
// import SingleRecipePage from '../pages/SingleRecipePage'

const Gallery = () => {

 // const recipe = useSelector(store.filter.recipeArray)

  //const [recipe, setRecipe] = useState([])

  // useEffect(() => {
  //    fetch(API_URL)
  //    .then((res) => res.json())
  //    .then(data => setRecipe(data.data))
  // },[])
 
  return (
    <GalleryWrapper>
      {/* {recipe.map(recipe => (
        <RecipeCard {...recipe} key={recipe._id} />
      ))} */}
    </GalleryWrapper>
  )
}

export default Gallery

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

// Gamla Gallery som fetchar alla recept:

// const Gallery = () => {

//   const [recipe, setRecipe] = useState([])

//   useEffect(() => {
//      fetch(API_URL)
//      .then((res) => res.json())
//      .then(data => setRecipe(data.data))
//   },[])
 
//   return (
//     <GalleryWrapper>
//       {recipe.map(recipe => (
//         <RecipeCard {...recipe} key={recipe._id} />
//       ))}
//     </GalleryWrapper>
//   )
// }

// export default Gallery