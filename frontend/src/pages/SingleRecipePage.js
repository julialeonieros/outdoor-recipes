import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import HeaderSmall from '../components/HeaderSmall'
import { API_URL } from '../reusables/urls'

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    position: 'absolute',
    margin: 'auto',
    padding: 20
  },
  media: {
    height: 400,
  },
  text: {
    marginBottom: 8,
  },
  button: {
    background:'#013220',
    color: '#fff',
    '&:hover': {
      background: '#2f5c47'
    }
  }
});

const SingleRecipePage = () => {

  const classes = useStyles();

  const [singleRecipe, setSingleRecipe] = useState({})
  
  const { id } = useParams()

  const API_RECIPE_URL = `${API_URL}/${id}`

  useEffect(() => {
    fetch(API_RECIPE_URL)
    .then(res => res.json())
    .then(data => {
      setSingleRecipe(data)
    })
  }, [API_RECIPE_URL])

  const ingredients = singleRecipe.ingredients
  const instructions = singleRecipe.instructions

  return (
    <>
      {/* <HeaderSmall /> */}
      <RecipeWrapper>
      <ImageBackground src="/assets/header-image-small.jpg" alt=""/>

        <Card className={classes.root}>

          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={singleRecipe.imageUrl}
              title={singleRecipe.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {singleRecipe.title}
              </Typography>

              <TextWrapper>
                <IngredientsWrapper>
                  {ingredients && ingredients.map((item, index) => (           
                    <Typography key={index} variant="body2" color="textSecondary" component="p" className={classes.text}>
                      {item}
                    </Typography>
                    ))}
                </IngredientsWrapper>

                <InstructionsWrapper>
                  {instructions && instructions.split('.').map((item, index) => (
                  <Typography key={index} variant="body2" color="textSecondary" component="p" className={classes.text}>               
                    {item}
                  </Typography>
                  ))}
                </InstructionsWrapper>
              </TextWrapper>

            </CardContent>
          </CardActionArea>

          <CardActions>
            <Link to="/" style={{ textDecoration: 'none'}}><Button variant="contained" className={classes.button}  size="large">TILLBAKA</Button></Link>

          </CardActions>

        </Card>
      </RecipeWrapper>
    </>
  )
}

export default SingleRecipePage

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* height: 100vh; */}
  position: relative;
  
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 5px;
`
const IngredientsWrapper = styled.div` 
  background-color: #F3FAF4;
  padding: 7px;
`
const InstructionsWrapper = styled.div`
   padding: 0 20px;
   width: 60%;
`

// const InnerWrapper = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   width: 50%;
//   margin: auto 0;
// `
const ImageBackground = styled.img`
  ${'' /* width: 100vw; */}
  height: 120vh;
  width: 100%;
  object-fit: cover;
  
`



// const IMG = styled.img`
//   width: 100%;
//   ${'' /* height: 200px; */}
//   object-fit: cover;
//   ${'' /* border: solid black 1px; */}
// `
// const BACK = styled.p`
// `
