import React from 'react'
import styled from 'styled-components'

const InputComponent = ({ type, setType, placeholder, input, setInput }) => {

  const handleChange = (index, event) => {
    event.preventDefault()
    const values = [...type]
    values[index].value = event.target.value
    setType(values)
  }

  return (
    <Wrapper>

      {input.map((type, id) => {
        return (
          <InputContainer>
            <InputField 
              required
              type="text"
              placeholder={placeholder}
              value={type.value || ""}
              onChange={event => handleChange(id, event)}
            />
          </InputContainer>
        )
      })}
    
    </Wrapper>
  )
}

export default InputComponent

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-end;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
`
const InputField = styled.input`
  border: 1px solid #CCC;
  margin-top: 8px;
  padding: 10px;
  width: 200px;
  height: 40px;
`