import React from 'react'
import styled from 'styled-components'

const InputSelect = ({ data, setData }) => {

  // assigns value to each option
  const handleChange = (index, event) => {
    event.preventDefault()
    const select = [...data]
    select[index].value = event.target.value

    setData(select)
  }

  return (
    <Wrapper>
      <Select
        value={data}
        onChange={event => handleChange(event)}
      >
        {data.map((item, id) => (
          <option value={item.value}>{item.title}</option>
        ))}
      </Select>
    </Wrapper>
  )
}

export default InputSelect

const Wrapper = styled.div`
  margin-top: 12px;
`

const Select = styled.select`
  border: 1px solid #CCC;
  margin: 0;
  padding: 10px;
  width: 150px;
  height: 40px;
  font-size: 14px;
  color: #2f2f2f;
`