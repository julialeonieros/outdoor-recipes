import React from 'react'
import styled from 'styled-components'

const InputMultipleFields = ({ data, setData }) => {

  const handleInput = (index, event) => {
    event.preventDefault()
    const input = [...data]
    input[index].value = event.target.value
    setData(input)
  }

  const handleAddIngredient = () => {
    const input = [...data]
    input.push({ value: null })
    setData(input) 
  }

  const handleRemoveIngredient = (id) => {
    const input = [...data]
    input.splice(id, 1)
    setData(input)
  }

  return (
    <Wrapper>
      {data.map((item, id) => {
        return (
          <InputContainer key={`${item} + ${id}`}>
            <InputField 
              // required
              type="text"
              placeholder="lägg till ingrediens"
              value={item.value || ""}
              onChange={event => handleInput(id, event)}
            />
            <DeleteBtn
              type='button'
              onClick={() => handleRemoveIngredient(id)}
            >x</DeleteBtn>
          </InputContainer>
        )
      })}
      <AddBtn
        type='button'
        onClick={() => handleAddIngredient()}
      >+ ingrediens</AddBtn>
    </Wrapper>
  )
}

export default InputMultipleFields

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`
const InputField = styled.input`
  border: 1px solid #CCC;
  padding: 10px;
  width: 300px;
  height: 40px;
`
const DeleteBtn = styled.button`
  cursor: pointer;
  border: 1px solid #CCC;
  margin-left: 10px;
  font-size: 14px;
  color: #000;
  background-color: pink;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  &:hover {
    background-color: #CCC;
  }
`
const AddBtn = styled.button`
  cursor: pointer;
  border: none;
  margin: 15px 0 18px;
  font-size: 12px;
  color: #000;
  background-color: #FFDAE0;
  padding: 0 8px;
  height: 40px;
  font-weight: bold;

  &:hover {
    background-color: pink;
  }
`
