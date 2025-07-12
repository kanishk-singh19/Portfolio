import React from 'react'
import Navbar from './sections/Navbar'  
import Hero from "./sections/Hero"
import ServiceSummary from './sections/About'
import CustomCursor from './components/CustomCursor'
import MePage from './sections/MePage'
import Services from './sections/Services'

const App = () => {
  return (
    <div className=' bg-[#ffffff] relative w-screen min-h-screen overflow-x-auto '>
      <CustomCursor/>
      <Navbar/>
      <Hero />
      <ServiceSummary/>
      <MePage/>
      <Services/>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>

    </div>
  )
}

export default App
