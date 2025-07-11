import React from 'react'
import Navbar from './sections/Navbar'  
import Hero from "./sections/Hero"
import ServiceSummary from './sections/About'

const App = () => {
  return (
    <div className=' bg-[#ffffff] relative w-screen min-h-screen overflow-x-auto '>
      <Navbar/>
      <Hero />
      <ServiceSummary/>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>

    </div>
  )
}

export default App
