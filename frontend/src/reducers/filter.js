import { createSlice } from '@reduxjs/toolkit'

export const filter = createSlice({
  name: 'filter',
  initialState: {
    isLoading: false,
    notFound: false,
    searchField: null,
    searchType: null,
    searchTag: null,
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setNotFound: (store, action) => {
      store.notFound = action.payload
    },
    setSearchField: (store, action) => {
      store.searchField = action.payload
    },
    setSearchType: (store, action) => {
      store.searchType = action.payload
    },
    setSearchTag: (store, action) => {
      store.searchTag = action.payload
    }
  }
})

// export const searchRecipes = (url) => {
//   return (dispatch) => {
//     dispatch(filter.actions.setLoading(true))
//     fetch(url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json()
//         } else {
//           console.log('Inga recept hittades')
//         }
//       })
//       .then(data => {
//         dispatch(filter.actions.setCurrentQuery(data.filter))
//         dispatch(filter.actions.setNotFound(false))
//         dispatch(filter.actions.setLoading(false))
//       })
//       .catch((error) => {
//         dispatch(filter.actions.setNotFound(true))
//         dispatch(filter.actions.setLoading(false))
//       })
//   }
// }
