import React from 'react'
import styled from 'styled-components'

const InputSelect = ({ data, setData }) => {

  return (
    <Wrapper>
      <Select
        // value={data}
        //value={}
        onChange={event => setData(event.target.value)}
      >
        {data.map((item) => (
          <option 
            value={item.value || ''} 
            key={item.title}
          >{item.title}</option>
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
