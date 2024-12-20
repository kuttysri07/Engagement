import React, { Fragment } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Family from './components/Family/Family'
import Gallery from './components/Gallery/Gallery'
import Contact from "./components/Contact/Contact"
import Events from "./components/Events/Events"

const App = () => {
  return (
    <div className=' font-Outfit'>
      <Fragment >
        <Nav/>
        <Home />
        <About />
        <Family />
        <Events />
        <Gallery />
        <Contact />
      </Fragment>
    </div>



  )
}

export default App