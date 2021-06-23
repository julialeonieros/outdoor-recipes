import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import styled from 'styled-components/macro' 

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
          <div key={value}>
            <FormControlLabel
              control={< Checkbox 
                checked={checkedState.includes(value)}
                onChange={() => handleOnChange(value)}
                name={value}
                color="primary"
                required={false}
              />}
              label={title}
              labelPlacement="bottom"
            />
          </div>
          
        )
      })}
    </Wrapper>
  )
}

export default InputCheckboxes

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 500px) {
    padding: 0 40px;
  }
`
