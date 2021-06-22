import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { createMuiTheme, ThemeProvider, TextField, Button, FormControl, FormLabel, 
  IconButton, Select, MenuItem } from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'

import HeaderSmall from '../components/HeaderSmall'
import InputCheckboxes from '../components/InputCheckboxes'
import InputMultipleFields from '../components/InputMultipleFields'
import { API_URL } from '../reusables/urls'
import { typesArray, tagsArray } from '../reusables/arrays'
import Footer from '../components/Footer'

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
  const history = useHistory()
  const fileInput = useRef()

  console.log(tags)

  const handleFormSubmit = (event) => {
    event.preventDefault()

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
          history.push('/')
        })
      })
  }

  return (
    <>
      <HeaderSmall />
      <Background>
        <FormWrapper>
          <ThemeProvider theme={theme}>
            <H2>Lägg till ditt favoritrecept!</H2>
            <RecipeForm onSubmit={(event) => handleFormSubmit(event)}>
              <Container>
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
              </Container>
    
              <Container>
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
              </Container>

              <Container>
                <FormControl fullWidth={true}>
                  <InputMultipleFields
                      data={ingredients}
                      setData={setIngredients}
                      label={"Ingredienser"}
                    />
                </FormControl>
              </Container>

              <Container>
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
              </Container>

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

              <Container>
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
              </Container>

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
                    placeholder={"bifoga bild"}
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
          </ThemeProvider>
        </FormWrapper>
      </Background>
    </>
  )
}

export default PostRecipePage

const Background = styled.div`
  background-color: pink;
`

const FormWrapper = styled.div`
  background-color: #FFF;
  width: 500px;
  padding: 30px 30px 50px;
  margin: 30px auto 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: solid pink 2px;
  border-radius: 10px;
`
const H2 = styled.h2`
  display: inline-block;
`
const RecipeForm = styled.form``

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`
const ContainerTags = styled(Container)`
  margin: 28px 0;
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
`
const LabelUpload = styled.label`
  font-family: 'Roboto', sans-serif;
  color: #757575;
`
