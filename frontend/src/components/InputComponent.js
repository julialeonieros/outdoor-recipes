import React from 'react'
import styled from 'styled-components'

const InputComponent = ({ type, setType, placeholder, input, setInput }) => {

  // const handleChange = (index, event) => {
  //   event.preventDefault()
  //   const values = [...type]
  //   values[index].value = event.target.value
  //   setType(values)
  // }
  const inputTwo = [1]

  return (
    <Wrapper>

      {inputTwo.map((type, id) => {
        return (
          <InputContainer>
            <InputField 
              required
              type="text"
              placeholder={placeholder}
              value={type.value || ""}
              // onChange={event => handleChange(id, event)}
            />
            <Btn
              type="button"
              // onClick={}
            >x</Btn>
          </InputContainer>
        )
      })}
      <BtnPlus
        type="button"
        // onClick={}
      >+</BtnPlus>
    </Wrapper>
  )
}

export default InputComponent

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // border: solid purple 2px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  // border: solid black 2px;
`
const InputField = styled.input`
  border: 1px solid #CCC;
  padding: 10px;
  width: 300px;
  height: 40px;
`
const Btn = styled.button`
  cursor: pointer;
  border: 1px solid #CCC;
  margin-left: 10px;
  font-size: 14px;
  color: #000;
  background-color: red;
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
const BtnPlus = styled(Btn)`
  background-color: green;
  margin-top: 8px;

  &:hover {
    background-color: #CCC;
  }
`