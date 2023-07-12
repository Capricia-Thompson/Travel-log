import React from 'react'
import tranquil from '../images/tranquil_spring.jpeg'

const Hero = () => {
  return (
    <div id="home" className="w-full h-[90vh]">
      <img className="w-full h-full object-cover" src={tranquil} alt="tranquil" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Escape</h1>
          <h2 className="text-4xl py-4 italic">With Clear View</h2>
          <p>Whether it's a girls trip, solo self-care, or leisure travel, Clear View's got you covered.  Check out some of the world's most exotic destinations at prices that won't break the bank.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero