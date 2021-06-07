import React from 'react'

import styled from 'styled-components/macro'

const Searchbar = () => {
  return (
    <>
      <Form>
        <Input 
          id="search-field"
          type="text"
          placeholder="fritext"
          // value={searchField}
        /> 
        <Select id="type">
          <option disables>typ</option>
          <option value="frukost">Frukost</option>
          <option value="lunchMiddag">Lunch/middag</option>
          <option value="fika">Fika</option>
          <option value="dryck">Dryck</option>
        </Select>
        <TagsContainer>
          <TagBtn 
            id="tags"
            value="veg">
              vego
          </TagBtn>
          <TagBtn 
            id="tags"
            value="glutenfri">
              glutenfri
          </TagBtn>
          <TagBtn 
            id="tags"
            value="snabbt">
              snabbt
          </TagBtn>
          <TagBtn 
            id="tags"
            value="eldKok">
              eld/kök
          </TagBtn>
        </TagsContainer>
        <SubmitButton type="submit">sök</SubmitButton>
      </Form>
    </>
  )
}

export default Searchbar

const Form = styled.form`
  background-color: pink;
  width: 80%;
  margin: 20px auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TagsContainer = styled.div`
  display: flex;  
  flex-direction: row;
`
const Input = styled.input`
  border: 1px solid #CCC;
  margin: 0;
  padding: 10px;
  width: 200px;
  height: 40px;
  font-size: 16px;
`
const Select = styled.select`
  border: 1px solid #CCC;
  margin: 0;
  padding: 10px;
  width: 150px;
  height: 40px;
  font-size: 16px;
`
const TagBtn = styled.button`
  cursor: pointer;
  border: 1px solid #CCC;
  margin: 0 5px;
  font-size: 14px;
  color: #000;
  background: #FFF;
  padding: 0 10px;
  height: 40px;

  &active {

  }
`
const SubmitButton = styled(TagBtn)`
  background-color: lavender;
`