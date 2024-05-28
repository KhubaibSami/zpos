import React from 'react'
import Navbar from './banner/navbar'
import HeroSection from './heroSection/herosection'
import Card from './cards/card'
import Software from './why_software/software'
import SoftwareCard from './softwareCard/card'
import Feature from './feature/feature'
import About from './about/about' 
import Footer from "./footer/footer"

const MainPage = () => {
  return (
    <>
    {/* <Navbar /> */}
    <HeroSection />
    <Card />
    <Software />
    <SoftwareCard />
    <Feature />
    <About />
    {/* <Footer /> */}

    </>
  )
}

export default MainPage