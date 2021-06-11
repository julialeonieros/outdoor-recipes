import React, { useState } from 'react'
import styled from 'styled-components/macro'

import HeaderSmall from '../components/HeaderSmall'
import InputComponent from '../components/InputComponent'

const ContactPage = () => {
  const [title, setTitle] = useState('')
  const [portions, setPortions] = useState('')
  const [ingredients, setIngredients] = useState([{ value: null }])
  const [instructions, setInstructions] = useState('')
  const [type, setType] = useState([{ value: null }])
  const [tags, setTags] = useState([{ value: null }])
  const [createdBy, setCreatedBy] = useState('')

  // const types = ['breakfast', 'lunchDinner', 'fika', 'beverage']
  const typesArray = [{value: 'breakfast', title: 'frukost'}, {value: 'lunchDinner', title: 'lunch/middag'}, {value: 'fika', title: 'fika'}, {value: 'beverage', title: 'dryck'}]
  const tagsArray = [{value: 'veg', title: 'vego'}, {value: 'glutenFree', title: 'glutenfri'}, {value: 'quick', title: 'snabbt'}, {value: 'fire', title: 'eld/kök'}]

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

          <RecipeLabel>
            Instruktioner:
            <InputFieldInstructions
              required
              type="text"
              onChange={(event) => setInstructions(event.target.value)}
              value={instructions}
              placeholder="Instruktioner"
            />
          </RecipeLabel>

          <RecipeLabelCheckbox>
            Typ:
            <Flex>
              {typesArray.map(item => (
                <TypesContainer>
                  {item.title}
                  <InputFieldTypes
                    key={item.title}
                    type="checkbox"
                    onChange={(event) => {setType(event.target.value)}}
                    value={item.value === type}
                  />
                </TypesContainer>
              ))}
            </Flex>
          </RecipeLabelCheckbox>

          <RecipeLabelCheckbox>
            Taggar:
            <Flex>
              {tagsArray.map(item => (
                <TypesContainer>
                  {item.title}
                  <InputFieldTypes
                    key={item.title}
                    type="checkbox"
                    onChange={(event) => {setTags(event.target.value)}}
                    value={item.value === tags}
                  />
                </TypesContainer>
              ))}
            </Flex>
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

        </RecipeForm>
      </FormWrapper>
    </>
  )
}

export default ContactPage

const FormWrapper = styled.div`
  background-color: pink;
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
  align-items: flex-start;
  margin-top: 16px;
  color: #2f2f2f;
  font-weight: bold;
`
const RecipeLabelCheckbox = styled(RecipeLabel)`
  display: flex;  
  flex-direction: column;
  margin-top: 20px;

`
const Flex = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  padding: 3px;
  width: 300px;
`
const TypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: normal;
`
const InputField = styled.input`
  border: 1px solid #CCC;
  margin-top: 8px;
  padding: 10px;
  width: 300px;
  height: 40px;
`
const InputFieldInstructions = styled.textarea`
  border: 1px solid #CCC;
  margin-top: 8px;
  padding: 10px;
  resize: none;
  width: 300px;
  height: 100px;
  font-family: sans-serif;
`
const InputFieldTypes = styled(InputField)`
  margin: 0px;
  width: 25px;
`


