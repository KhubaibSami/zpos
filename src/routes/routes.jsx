import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../landing_page/banner/navbar'
import Footer from '../landing_page/footer/footer'

import MainPage from '../landing_page/mainPage'
import About from '../OtherPages/about/about'
import Services from '../OtherPages/services/services'
import Blog from '../OtherPages/blog/blog'
import Features from '../OtherPages/feature/features'
import Call from '../OtherPages/call/call'

const Routing = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<MainPage />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/feature" element={<Features />} /> 
        <Route path="/call" element={<Call />} /> 


      </Routes> 
    <Footer />

    </>
  )
}

export default Routing