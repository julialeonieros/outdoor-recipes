import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { filter } from './reducers/filter'
import Navbar from './components/Navbar'
import StartPage from './pages/StartPage'
import SingleRecipePage from './pages/SingleRecipePage'
import PostRecipePage from './pages/PostRecipePage'
import ContactPage from './pages/ContactPage'
//import Footer from './components/Footer'

const reducer = combineReducers({
  filter: filter.reducer
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" component={StartPage}/>
            <Route path="/recipes/:id" component={SingleRecipePage} />
            <Route path="/skapa-recept" component={PostRecipePage} />
            <Route path="/kontakt" component={ContactPage}/>
          </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  )
}

export default App
