import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { createMuiTheme, ThemeProvider, TextField, Button, FormControl, FormLabel, 
  IconButton, Select, MenuItem } from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'

import InputCheckboxes from '../components/InputCheckboxes'
import InputMultipleFields from '../components/InputMultipleFields'
import { API_URL } from '../reusables/urls'
import { typesArray, tagsArray } from '../reusables/arrays'
import Loader from '../components/Loader'

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
})

const PostRecipePage = () => {
  const [title, setTitle] = useState('')
  const [portions, setPortions] = useState('')
  const [ingredients, setIngredients] = useState([{ value: null }])
  const [instructions, setInstructions] = useState('')
  const [type, setType] = useState('')
  const [tags, setTags] = useState([''])
  const [createdBy, setCreatedBy] = useState('')
  const [fileName, setFileName] = useState()
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const fileInput = useRef()

  console.log('tag length', tags.length)
  console.log(tags)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    if (tags.length === 0) {
      setTags([''])
    }
    console.log(tags)

    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])

    fetch(`${API_URL}/img`, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then(({ imageUrl, imageName }) => {
        fetch(API_URL, {
          method: 'POST',
          body: JSON.stringify({
            title, 
            portions,
            ingredients: ingredients.map((item) => item.value),
            instructions, 
            type,
            tags,
            createdBy,
            imageUrl,
            imageName 
          }),
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(() => {
          setLoading(false)
          history.push('/')
        })
      })
  }

  return (
    <>
      <Wrapper>
      <BackgroundImg src="/assets/ice.jpg" alt="a person ice-skating" />
        <FormBackground>
          {loading && <Loader />}

          {!loading &&
          <ThemeProvider theme={theme}>
          <H2>Lägg till ditt favoritrecept!</H2>
          <RecipeForm onSubmit={(event) => handleFormSubmit(event)}>
            <FieldContainer>
              <FormControl fullWidth={true}>
                <TextField
                  required={true}
                  label="Titel"
                  id="titel"
                  type="text"
                  onChange={(event) => setTitle(event.target.value)}
                  value={title}
                  placeholder="Namn på recept"
                  variant="outlined"
                  color="primary"
                />
              </FormControl>
            </FieldContainer>
  
            <FieldContainer>
              <FormControl
                fullWidth={false}
              >
                <TextField
                  required={true}
                  label="Portioner"
                  id="titel"
                  type="text"
                  onChange={(event) => setPortions(event.target.value)} 
                  value={portions}
                  placeholder="Antal portioner"
                  variant="outlined"
                  color="primary"
                />
              </FormControl>
            </FieldContainer>

            <FieldContainer>
              <FormControl fullWidth={true}>
                <InputMultipleFields
                    data={ingredients}
                    setData={setIngredients}
                    label={"Ingredienser"}
                  />
              </FormControl>
            </FieldContainer>

            <FieldContainer>
              <FormControl fullWidth={true}>
                <TextField
                  required={true}
                  label="Instruktioner"
                  id="instruktioner"
                  type="text"
                  onChange={event => setInstructions(event.target.value)}
                  value={instructions}
                  placeholder="Instruktioner"
                  variant="outlined"
                  color="primary"
                  fullWidth={true}
                  multiline={true}
                />
              </FormControl>
            </FieldContainer>

            <ContainerTags>
              <FormControl>
                <FormLabel>Taggar</FormLabel>
                <InputCheckboxes 
                  data={tagsArray}
                  setData={setTags}
                  label={"Ingredienser"}
                />
              </FormControl>
            </ContainerTags>

            <FieldContainer>
              <FormControl>
                <FormLabel>Typ</FormLabel>
                <Select
                  labelId="typ"
                  value={type}
                  onChange={event => setType(event.target.value)}
                  variant="filled"
                  color="primary"
                >
                  {typesArray.map((item) => (
                    <MenuItem
                      value={item.value || ''}
                      key={item.title}
                    >{item.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FieldContainer>

            <ContainerMargin>
              <FormControl fullWidth={true}>
                <TextField
                  label="Skapat av"
                  id="skapare"
                  type="text"
                  onChange={event => setCreatedBy(event.target.value)}
                  value={createdBy}
                  placeholder="Receptets skapare"
                  variant="outlined"
                  color="primary"
                  fullWidth={true}
                />
              </FormControl>
            </ContainerMargin>

            <ContainerMargin>
              <LabelUpload id="file">
                Ladda upp foto *
                <FlexRow>
                  <IconButton
                    color="primary"
                    aria-label="ladda upp foto"
                    component="span"
                  >
                    <AddAPhotoIcon fontSize="large"/>
                  </IconButton>
                  <p>{fileName}</p>
                </FlexRow>
                <input
                  type="file"
                  required
                  id="file"
                  style={{ display: 'none' }}
                  ref={fileInput}
                  onChange={(event) => {
                    setFileName(event.target.files[0].name)
                  }}
                />
              </LabelUpload>
            </ContainerMargin>

            <ButtonContainer>
              <Button 
                type="submit"
                color="primary"
                aria-label="lägg till recept"
                variant="contained"
              >Lägg till recept</Button>
            </ButtonContainer>

          </RecipeForm>
        </ThemeProvider>}
        </FormBackground>
      </Wrapper>
    </>
  )
}

export default PostRecipePage

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const BackgroundImg = styled.img`
  height: 120vh;
  width: 100vw;
  object-fit: cover;
  position: fixed;
`

const FormBackground = styled.div`
  background-color: #FFF;
  width: 500px;
  padding: 30px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  top: 130px;

  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    top: 100px;
    width: 95%;
  }
`
const H2 = styled.h2`
  @media (max-width: 768px) {
    font-size: 23px;
  }
`
const RecipeForm = styled.form`

  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`
const ContainerTags = styled(FieldContainer)`
  margin: 37px 0;
`
const ContainerMargin = styled.div`
  margin: 35px 0;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    margin: 0;
  }
`
const LabelUpload = styled.label`
  font-family: 'Roboto', sans-serif;
  color: #757575;
`
