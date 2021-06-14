// import React, { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

const InputCheckboxes = ({ data, setData }) => {

  const handleChange = (index) => {
    // const input = [...data]
    if (data.includes(index)) {
      setData(data.filter((item) => item !== index))
    } else {
      setData(index)
    }
  }

  // const handleInput = (index, event) => {
  //   event.preventDefault()
  //   const input = [...data]
  //   input[index].value = event.target.value
  //   setData(input)

  return (

    <Wrapper>
      {data.map((item) => (
        <TypesContainer key={item.title}>
          {item.title}
          <InputField
            type="checkbox"
            onChange={() => handleChange(item.value)}
            checked={data === item.value}
          />
        </TypesContainer>
      ))}
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
