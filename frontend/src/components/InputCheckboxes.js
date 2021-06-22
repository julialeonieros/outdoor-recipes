import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

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
    <FormGroup row>
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
    </FormGroup>
  )
}

export default InputCheckboxes
