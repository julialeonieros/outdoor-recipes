import React, { useState } from 'react'
import styled from 'styled-components'

const InputCheckboxes = ({ data, setData }) => {

  const [checkedState, setCheckedState] = useState([])

  const handleOnChange = (input) => {

    if (checkedState.includes(input)) {
      const filteredState = checkedState.filter(item => item !== input)
      setCheckedState(filteredState)
      setData(filteredState)
    } else {
      setCheckedState([...checkedState, input])
      setData([...checkedState, input])
    }
  }

  return (

    <Wrapper>
      {data.map(({ value, title }, index) => {
        return (
          <TypesContainer key={title}>
            {title}
            <InputField
              type="checkbox"
              checked={checkedState.includes(value)}
              onChange={() => handleOnChange(value)}
            />
          </TypesContainer>
        )
      })}
    </Wrapper>
  )
}

export default InputCheckboxes

const Wrapper = styled.div`
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
  margin: 0px;
  padding: 10px;
  width: 25px;
  height: 40px;
`
