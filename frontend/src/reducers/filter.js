import { createSlice } from '@reduxjs/toolkit'

export const filter = createSlice({
  name: 'filter',
  initialState: {
    isFiltering: false,
    isLoading: false,
    searchValue: "",
    recipeArray: []
  },
  reducers: {
    setFiltering: (store, action) => {
      store.isFiltering = action.payload
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setSearchValue: (store, action) => {
      store.searchField = action.payload
    },
    setCurrentQuery: (store, action) => {
      store.recipeArray = []
      store.recipeArray.push(action.payload)
    }
  }
})

export const searchRecipes = (url) => {
  return (dispatch) => {
    dispatch(filter.actions.setLoading(true))
    fetch(url)
      .then((res) => res.json())

      .then(data => {
        dispatch(filter.actions.setCurrentQuery(data.data))
        dispatch(filter.actions.setFiltering(true))
        dispatch(filter.actions.setLoading(false))
      })
      .catch((error) => {
        dispatch(filter.actions.setLoading(false))
      })
  }
}
