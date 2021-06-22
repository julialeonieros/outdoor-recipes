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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { API_URL } from '../reusables/urls'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    position: 'absolute',
    margin: 'auto',
    padding: 20,
    top: 150,
    [theme.breakpoints.down('500')]: {
      top: 75,
      padding: 0,
      height: '110vh',
    }
  },
  media: {
    height: 350,
  },
  text: {
    marginBottom: 8,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
    }
  },
  button: {
    background:'#013220',
    color: '#fff',
    '&:hover': {
      background: '#2f5c47'
    }
  }
}))

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
    <RecipeWrapper>
      <ThemeProvider theme={theme}>
        <ImageBackground src="/assets/DSC_4305.jpg" alt="forest"/>
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
                      <Typography 
                        key={index} 
                        variant="body2" 
                        color="textSecondary" 
                        component="p" 
                        className={classes.text}>
                        {item}
                      </Typography>
                      ))}
                  </IngredientsWrapper>
                  <InstructionsWrapper>
                    {instructions && instructions.split('.').map((item, index) => (
                      <Typography 
                        key={index} 
                        variant="body2" 
                        color="textSecondary" 
                        component="p" 
                        className={classes.text}>               
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
        </ThemeProvider>
    </RecipeWrapper>
  )
}

export default SingleRecipePage

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 12px;
  @media (max-width: 500px) {
    padding: 0 12px 0 0 ;
  }
`
const InstructionsWrapper = styled.div`
   padding: 0 20px;
   width: 70%;
   @media (max-width: 500px) {
    padding: 0 0 0 12px;
  }
`
const ImageBackground = styled.img`
  height: 120vh;
  width: 100%;
  object-fit: cover;
  @media (max-width: 500px) {
    display: none;
  }
`
