import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { filter, searchRecipes } from '../reducers/filter'
import { API_URL } from '../reusables/urls'
import { typesArrayFilter, tagsArray } from '../reusables/arrays'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2f5c47',
      main: '#013220', // dark moss green
      dark: '#000d00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffc1e3',
      main: '#f48fb1', // pink
      dark: '#bf5f82',
      contrastText: '#000',
    },
  },
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
  btnSearch: {
    height: 60,
    width: 90,
    color: "#fff",
    background: '#013220',
    '&:hover': {
      background: '#000d00'
    }
  },
  btnReset: {
    height: 40,
    width: 80,
    borderRadius: '50px',
    color: "black",
    background: '#f48fb1',
    '&:hover': {
      background: '#bf5f82'
    }
  },
  buttonFilter: {
    margin: "0 10px",
    color: "#000d00",  
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
    }
  },
  
}))

const Searchbar = () => {

  const classes = useStyles()

  const [searchValue, setSearchValue]= useState('')
  const dispatch = useDispatch()

  const handleSearch = event => {
    event.preventDefault()
    const url_title = `${API_URL}?title=${searchValue}`
    dispatch(searchRecipes(url_title))
    setSearchValue('')
  }

  const handleResetClick = () => {
    dispatch(filter.actions.setFiltering(false))
  }

  const handleTypeClick = (input) => {
    const URL = 'http://localhost:8080/recipes'
    const url_tags = `${URL}?type=${input}`
    dispatch(searchRecipes(url_tags))
  }

  const handleTagClick = (input) => {
    const URL = 'http://localhost:8080/recipes'
    const url_tags = `${URL}?tags=${input}`
    dispatch(searchRecipes(url_tags))
  }

  return (
    <SearchWrapper>
      <ThemeProvider theme={theme}>
        <Form onSubmit={handleSearch}>
          <TextField 
            id="outlined-search" 
            label="Sök recept" 
            type="search" 
            variant="outlined"
            color='primary'             
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            style={{backgroundColor: "#fefdfb9f", border: "2px solid #01322079", borderRight: 0, borderRadius: '50px 0 0 50px'}}
          /> 
          <Button
            variant="contained" 
            color="primary" 
            type="submit" 
            style={{borderRadius: '0 50px 50px 0', paddingRight: 30}}
            className={classes.btnSearch}
            >
            SÖK
          </Button>
        </Form>

        <BtnWrapper>
          <BtnInnerWrapper>
            <ButtonsContainer>
              {typesArrayFilter.map(({ value, title }, index) => {
                return (
                  <Button
                    key={title}
                    variant="outlined" color="primary" 
                    onClick={() => handleTypeClick(value)}
                    // style={{margin: "0 10px"}}
                    className={classes.buttonFilter}
                    >{title}
                  </Button>
                )
              })}
            </ButtonsContainer>
            
            <ButtonsContainer>
              {tagsArray.map(({ value, title }, index) => {
                return (
                  <Button
                    key={title}
                    variant="outlined" color="primary" 
                    onClick={() => handleTagClick(value)}
                    // style={{margin: "0 10px"}}
                    className={classes.buttonFilter}
                    >{title}
                  </Button>
                )
              })}
            </ButtonsContainer>
          </BtnInnerWrapper>
          <Button variant="contained" color="secondary" size="large" onClick={() => handleResetClick()} className={classes.btnReset}>ALLA</Button>

        </BtnWrapper> 
      </ThemeProvider>  
    </SearchWrapper>
  )
}

export default Searchbar

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`
const Form = styled.form`
  width: 60%;
  margin: 20px auto;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 200px;
  @media (max-width: 500px) {
    bottom: 250px;
  }
`
const BtnWrapper = styled.div`
  display: flex;  
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 25px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 15px 0;
  }
`
const BtnInnerWrapper = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }
`

const ButtonsContainer = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`
// const ButtonSearch = styled(Button)({
//   height: 60,
//   width: 90,
// })
// const ButtonReset = styled(Button)({
//   height: 40,
//   width: 125,
//   borderRadius: '50px',
// })