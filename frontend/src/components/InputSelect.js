import React from 'react'
//import styled from 'styled-components'

const InputSelect = ({ data, setData }) => {

  // assigns value to each option
  const handleChange = (index, event) => {
    event.preventDefault()
    const select = [...data]
    select[index].value = event.target.value

    setData(select)
  }

  return (
    <div>
      <select
        value={data}
        onChange={event => handleChange(event)}
      >
        {data.map((item, id) => (
          <option value={item.value}>{item.title}</option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect

// const Wrapper = styled.div`
//   display: flex;  
//   flex-direction: row;
//   justify-content: space-between;
//   margin-top: 8px;
//   padding: 3px;
//   width: 300px;
// `
// const TypesContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-weight: normal;
// `
// const InputField = styled.input`
//   border: 1px solid #CCC;
//   margin: 0px;
//   padding: 10px;
//   width: 25px;
//   height: 40px;
// `