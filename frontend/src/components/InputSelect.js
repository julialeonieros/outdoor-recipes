import React, { useState } from 'react'
import styled from 'styled-components'
import { Select } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

const InputSelect = ({ data, setData }) => {

  const [selected, setSelected] = useState('')

  return (
    <Wrapper>
      <Select
        labelId="typ"
        select
        value={data}
        placeholder="välj typ"
        onChange={event => setData(event.target.value)}
        helperText="välj typ av recept"
        variant="filled"
        autoWidth
        name="Välj typ"
      >
        {data.map((item) => (
          <MenuItem
            value={item.value || ''}
            key={item.title}
          >{item.title}</MenuItem>
        ))}
      </Select>
    </Wrapper>
  )
}

export default InputSelect

const Wrapper = styled.div`
  margin-top: 12px;
  border: solid purple 2px;
`

// const Select = styled.select`
//   border: 1px solid #CCC;
//   margin: 0;
//   padding: 10px;
//   width: 150px;
//   height: 40px;
//   font-size: 14px;
//   color: #2f2f2f;
// `
