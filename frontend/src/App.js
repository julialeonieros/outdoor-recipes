import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StartPage from './pages/StartPage'
// import SingleRecipePage from './pages/SingleRecipePage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage}/>
          {/* <Route path="/" component={SingleRecipePage} /> */}
          <Route path="/kontakt" component={ContactPage}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
