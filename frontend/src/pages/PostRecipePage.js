import React, { useState } from 'react'
import styled from 'styled-components/macro'

import HeaderSmall from '../components/HeaderSmall'
import InputComponent from '../components/InputComponent'

const ContactPage = () => {
  const [title, setTitle] = useState('')
  const [portions, setPortions] = useState('')
  const [ingredients, setIngredients] = useState([{ value: null }])

  return (
    <>
      <HeaderSmall />
      <FormWrapper>
        <H2>Lägg till ditt favoritrecept!</H2>
        <RecipeForm
          onSubmit>

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
            <InputComponent
              placeholder="Lägg till ingrediens"
              type={ingredients}
              setType={setIngredients}
            />
          </RecipeLabel>

            
        </RecipeForm>
      </FormWrapper>
    </>
  )
}

export default ContactPage

const FormWrapper = styled.div`
  background-color: pink;
  width: 100%;
  padding: 30px;
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
  margin-top: 16px;
  color: #2f2f2f;
`
const InputField = styled.input`
  border: 1px solid #CCC;
  margin-top: 8px;
  padding: 10px;
  width: 200px;
  height: 40px;
`


