import { React, useState } from 'react'
import {  useDispatch } from 'react-redux'

import styled from 'styled-components/macro'

import { filter, searchRecipes } from '../reducers/filter'
import { API_URL } from '../reusables/urls'

const Searchbar = () => {

  const [searchValue, setSearchValue]= useState('')

  const dispatch = useDispatch()

  const searchTag = ['veg', 'gluten-free', 'quick', 'fire']
  const searchType = ['breakfast', 'lunchDinner', 'fika', 'beverage']

  const handleSearch = event => {
    event.preventDefault()
    const url_title = `${API_URL}?title=${searchValue}`
    dispatch(searchRecipes(url_title))
  }

  const handleResetClick = () => {
    dispatch(filter.actions.setFiltering(false))
  }

  const handleTypeClick = (index) => {
    const URL = 'http://localhost:8080/recipes'
    const url_tags = `${URL}?type=${searchType[index]}`
    dispatch(searchRecipes(url_tags))
  }

  const handleTagClick = (index) => {
    const URL = 'http://localhost:8080/recipes'
    const url_tags = `${URL}?tags=${searchTag[index]}`
    dispatch(searchRecipes(url_tags))
    //const url_tags = `${API_URL}?tags=${searchTag[index]}`
    //dispatch(filter.actions.setSearchTag(searchTag[index]))
  }

  return (
    <SearchWrapper>
      <Form onSubmit={handleSearch}>
      {/* <Form> */}
        <Input 
          id="search-field"
          type="text"
          placeholder="fritext"
          value={searchValue}
          //onChange={handleSearchFieldChange}
          onChange={(event) => setSearchValue(event.target.value)}
        /> 
        <SubmitButton type="submit">SÖK RECEPT</SubmitButton>

        <ResetButton onClick={() => handleResetClick()}>VISA ALLA RECEPT</ResetButton>
        </Form>

      <BtnWrapper>
          <TypeContainer>
            {searchType.map((btn, index) => (
              <div key={btn}>
                <TypeBtn onClick={() => handleTypeClick(index)}>{btn}</TypeBtn>
              </div>
            ))}
            {/* <option disables>typ</option>
            <option value="frukost">Frukost</option>
            <option value="lunchMiddag">Lunch/middag</option>
            <option value="fika">Fika</option>
            <option value="dryck">Dryck</option> */}
          </TypeContainer>

          <TagsContainer>
            {searchTag.map((btn, index) => (
              <div key={btn}>
                <TagBtn onClick={() => handleTagClick(index)}>{btn}</TagBtn>
              </div>
            ))}      
          </TagsContainer>
      </BtnWrapper> 
    </SearchWrapper>
  )
}

export default Searchbar

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  background-color: pink;
  width: 40%;
  margin: 20px auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Input = styled.input`
  border: 1px solid #CCC;
  margin: 0;
  padding: 10px;
  width: 200px;
  height: 40px;
  font-size: 16px;
`
const BtnWrapper = styled.div`
  display: flex;  
  flex-direction: column;
`
const TagsContainer = styled.div`
  display: flex;  
  flex-direction: row;
  margin: 20px 0;
`
const TypeContainer = styled.div`
  display: flex;  
  flex-direction: row;
`
const TypeBtn = styled.button`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid #fde431;
  margin: 0 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #f15c5c;
  background: #feee7d;
  padding: 0 10px;
  height: 40px;
  transition: all 150ms linear;
  width: 100px;

  &:hover {
    transition: all 150ms linear;
    opacity: .85;
  }
  &active {
  }
`
const TagBtn = styled.button`
  cursor: pointer;
  border-radius: 15px;
  border: none;
  margin: 0 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #FE8CDF;
  background: #353866;
  padding: 0 10px;
  height: 40px;
  transition: all 150ms linear;
  width: 100px;

  &:hover {
    transition: all 150ms linear;
    opacity: .85;
  }
  &active {
  }
`
const SubmitButton = styled(TagBtn)`
  background-color: lavender;
`
const ResetButton = styled(TagBtn)`
  background-color: silver;
`
// const Select = styled.select`
//   border: 1px solid #CCC;
//   margin: 0;
//   padding: 10px;
//   width: 150px;
//   height: 40px;
//   font-size: 16px;
// `