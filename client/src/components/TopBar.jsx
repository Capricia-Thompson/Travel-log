import React from 'react'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { FcClock } from 'react-icons/fc'
import { FiPhoneOutgoing } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <TiWeatherPartlySunny size={30} className="text-[var(--primary-dark)] mr-2"/>
        <h1 className="text-xl font-bold text-gray-700">CLEAR VIEW</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <FcClock size={20} className="mr-2 text-[var(--primary-dark)]"/>
          <p className="text-sm text-gray-700">8AM - 6AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <FiPhoneOutgoing size={20} className="mr-2 text-[var(--primary-dark)]"/>
          <p className="text-sm text-gray-700">1-888-GET-AWAY</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  )
}

export default TopBar