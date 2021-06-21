import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const InputMultipleFields = ({ data, setData, label }) => {

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
            <TextField 
              required={true}
              label={label}
              id="ingredienser"
              type="text"
              onChange={event => handleInput(id, event)}
              value={item.value || ""}
              placeholder="Lägg till ingrediens"
              variant="outlined"
              color="primary"
              margin="normal"
              size="small"
            />
            <IconButton  
              color="primary"  
              onClick={() => handleRemoveIngredient(id)}
              aria-label="ta bort fält"
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
          </InputContainer>
        )
      })}
      <IconButton 
        color="primary"
        onClick={() => handleAddIngredient()}
        aria-label="lägg till fält"
      >
        <AddCircleOutlineIcon fontSize="large" />
      </IconButton>
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
