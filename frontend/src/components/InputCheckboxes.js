import React from 'react'
import styled from 'styled-components'

const InputCheckboxes = ({ data, setData }) => {

  // assigns value to each checkbox
  const handleChange = (index, event) => {
    event.preventDefault()
    const check = [...data]
    check[index].value = event.target.value

    setData(check)
  }

  return (
    <Wrapper>
      {data.map((item) => (
        <TypesContainer>
          {item.title}
          <InputField
            key={item.title}
            type="checkbox"
            value={item.value}
            // value={item.value === tags}
            onChange={event => handleChange(event)}
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