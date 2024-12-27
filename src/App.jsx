import React, { Fragment, useEffect } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Family from './components/Family/Family'
import Gallery from './components/Gallery/Gallery'
import Contact from "./components/Contact/Contact"
import Events from "./components/Events/Events"
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      // once: true, // Whether animation should happen only once
      offset: 100, // Offset (in px) from the original trigger point
    });
  }, []);
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