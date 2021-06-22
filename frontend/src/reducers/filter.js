import { createSlice } from '@reduxjs/toolkit'

//const searchTag = ['veg', 'gluten-free', 'quick', 'fire']

export const filter = createSlice({
  name: 'filter',
  initialState: {
    isFiltering: false,
    isLoading: false,
    notFound: false,
    searchValue: "",
    // searchType: "",
    // searchTag: "",
    recipeArray: []
  },
  reducers: {
    setFiltering: (store, action) => {
      store.isFiltering = action.payload
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setNotFound: (store, action) => {
      store.notFound = action.payload
    },
    setSearchValue: (store, action) => {
      store.searchField = action.payload
    },
    // setSearchType: (store, action) => {
    //   store.searchType = action.payload
    // },
    // setSearchTag: (store, action) => {
    //   store.searchTag = action.payload
    // },
    // push selected values into recipeArray
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
      .then((res) => {
        if (res.ok) {
          return res.json()
          //
        } else {
          console.log('Inga recept hittades')
        }
      })
      .then(data => {
        // console.log('this', url, data)
        dispatch(filter.actions.setCurrentQuery(data.data))
        dispatch(filter.actions.setFiltering(true))
        // dispatch(filter.actions.setSearchTag())
        dispatch(filter.actions.setNotFound(false))
        dispatch(filter.actions.setLoading(false))
      })
      .catch((error) => {
        dispatch(filter.actions.setNotFound(true))
        dispatch(filter.actions.setLoading(false))
      })
  }
}
