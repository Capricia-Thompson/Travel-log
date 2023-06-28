import React from 'react'
import tranquil from '../images/tranquil_spring.jpeg'

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img className="w-full h-full object-cover" src={tranquil} alt="tranquil" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Escape</h1>
          <h2 className="text-4xl py-4 italic">With Clear View</h2>
          <p>Ex laboris do veniam ut tempor dolore sint dolor laborum non ullamco ipsum exercitation aliquip. Nostrud ex labore do fugiat adipisicing dolor. Aliquip exercitation non commodo deserunt eu reprehenderit commodo. Aute ullamco anim amet adipisicing aliquip id qui ullamco in ea. Occaecat do proident fugiat officia consequat ad ad aute ad.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero