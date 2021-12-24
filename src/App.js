import React from 'react'
import Navbar from './Navbar'
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route,Routes, } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about"  element={<About />}></Route>
        <Route path="/services" element={<Services />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
