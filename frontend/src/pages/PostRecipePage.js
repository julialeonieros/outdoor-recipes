import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import HeaderSmall from '../components/HeaderSmall'
import InputCheckboxes from '../components/InputCheckboxes'
import InputSelect from '../components/InputSelect'
import InputMultipleFields from '../components/InputMultipleFields'
import { API_URL } from '../reusables/urls'
import { typesArray, tagsArray } from '../reusables/arrays'

const PostRecipePage = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [portions, setPortions] = useState('')
  const [ingredients, setIngredients] = useState([{ value: null }])
  const [instructions, setInstructions] = useState('')
  const [type, setType] = useState('')
  const [tags, setTags] = useState([])
  const [createdBy, setCreatedBy] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title, 
        portions,
        ingredients: ingredients.map((item) => item.value),
        instructions, 
        type,
        tags: tags.map((item) => item.value),
        createdBy
      })
    }
    fetch(API_URL, options)
    .then(res => res.json())
    .then(() => {
      history.push("/")
    })
  }
  console.log('tags: ', tags)

  return (
    <>
        <HeaderSmall />
        <FormWrapper>
          <H2>Lägg till ditt favoritrecept!</H2>
          <RecipeForm
            onSubmit={(event) => handleFormSubmit(event)}>

            <RecipeLabel>
              Titel:
              <InputField
                required
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                placeholder="Namn på recept"
              />
            </RecipeLabel>

            <RecipeLabel>
              Portioner:
              <InputField
                required
                type="text"
                onChange={(event) => setPortions(event.target.value)}
                value={portions}
                placeholder="Antal portioner"
              />
            </RecipeLabel>

            <RecipeLabel>
              Ingredienser:
              <InputMultipleFields
                data={ingredients}
                setData={setIngredients}
              />
            </RecipeLabel>

            <RecipeLabel>
              Instruktioner:
              <InputFieldInstructions
                required
                type="text"
                onChange={event => setInstructions(event.target.value)}
                value={instructions}
                placeholder="Instruktioner"
              />
            </RecipeLabel>

            <RecipeLabelCheckbox>
              Taggar:
              <InputCheckboxes 
                data={tagsArray}
                setData={setTags}
              />
            </RecipeLabelCheckbox>

            <RecipeLabelCheckbox>
              Typ:
              <InputSelect 
                data={typesArray}
                setData={setType}
              />
            </RecipeLabelCheckbox>

            <RecipeLabel>
              Skapat av:
              <InputField
                required
                type="text"
                onChange={(event) => setCreatedBy(event.target.value)}
                value={createdBy}
                placeholder="Receptets skapare"
              />
            </RecipeLabel>

            <SubmitBtn type="submit">Lägg till recept</SubmitBtn>

          </RecipeForm>
        </FormWrapper>
    </>
  )
}

export default PostRecipePage

const FormWrapper = styled.div`
  background-color: #668479;
  width: 400px;
  padding: 30px 30px 30px 60px;
  margin: 30px auto 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const H2 = styled.h2`
  display: inline-block;
`
const RecipeForm = styled.form``

const RecipeLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  // color: #2f2f2f;
  font-weight: bold;
`
const RecipeLabelCheckbox = styled(RecipeLabel)`
  display: flex;  
  flex-direction: column;
  margin-top: 20px;
`
const InputField = styled.input`
  // border: 1px solid #668479;
  border: solid #CCC 1px;
  margin-top: 8px;
  padding: 10px;
  width: 300px;
  height: 40px;
`
const InputFieldInstructions = styled.textarea`
  border: solid #CCC 1px;
  margin-top: 8px;
  padding: 10px;
  resize: none;
  width: 300px;
  height: 100px;
  font-family: sans-serif;
`
const SubmitBtn = styled.button`
  cursor: pointer;
  border: none;
  margin-top: 25px;
  font-size: 14px;
  color: #000;
  background-color: #FFDAE0;
  padding: 0 10px;
  height: 40px;
  font-weight: bold;

  &:hover {
    background-color: pink;
  }
`
