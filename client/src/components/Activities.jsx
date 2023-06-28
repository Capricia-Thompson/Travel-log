import React from 'react'
import waterfalls from '../images/waterfalls.jpeg'
import floating from '../images/floating.jpeg'
import starfish from '../images/starfish.jpeg'

const Activities = () => {
  return (
    <div id="activities" className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 uppercase font-bold top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] text-white text-3xl font-fold">Resorts</h3>        
        <img className="w-full h-full object-cover relative border-4 border-white shadow-2xl" src={starfish} alt="starfish"/>
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 uppercase font-bold top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] text-white text-3xl font-fold">Retreats</h3>        
        <img className="w-full h-full object-cover relative border-4 border-white shadow-2xl" src={waterfalls} alt="waterfalls"/>
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 uppercase font-bold top-[50%] left-[50%] translate-x-[50%] translate-y-[50%] text-white text-3xl font-fold">Relax</h3>        
        <img className="w-full h-full object-cover relative border-4 border-white shadow-2xl" src={floating} alt="floating"/>
      </div>
    </div>
  )
}

export default Activities