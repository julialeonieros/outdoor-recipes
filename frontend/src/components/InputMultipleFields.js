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
