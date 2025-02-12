import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Aminities from './Components/Aminities'
import Gallery from './Components/Gallery'
import RoomsAndPrice from './Components/RoomsAndPrice'
import Reviews from './Components/Reviews'
import Foooter from './Components/Foooter'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto pt-20 px-6">
    <HeroSection/>
    <Aminities/>
    <Gallery/>
    <RoomsAndPrice/>
    <Reviews/>
    <Foooter/>
    </div>
    </>
  )
}

export default App
