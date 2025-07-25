import React from 'react'
import Navbar from './sections/Navbar'  
import Hero from "./sections/Hero"
import ServiceSummary from './sections/About'
import CustomCursor from './components/CustomCursor'
import MePage from './sections/MePage'
import Projects from './sections/Projects'
import ContactSection from './sections/ContactSection';



const App = () => {
  return (
    <div className=' bg-[#ffffff] relative w-screen min-h-screen overflow-x-auto '>
      <CustomCursor/>
      <Navbar/>
      <Hero />
      <ServiceSummary/>
      <MePage/>
      <Projects/>
      <ContactSection/>
      
      
    </div>
  )
}

export default App
