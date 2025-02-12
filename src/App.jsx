import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto pt-20 px-6">
    <HeroSection/>
    {/* <Gallery/>
    <Aminities/>
    <RoomsAndPrice/>
    <Reviews/>
    <Footer/> */}
    </div>
    </>
  )
}

export default App
