import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import StartPage from './pages/StartPage'
// import SingleRecipePage from './pages/SingleRecipePage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" component={StartPage}/>
            {/* <Route path="/:_id" component={SingleRecipePage} /> */}
            <Route path="/kontakt" component={ContactPage}/>
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
