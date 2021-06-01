import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StartPage from './pages/StartPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
