import React from 'react'
import brown_sand from '../images/brown_sand.jpeg'
import clear_blue from '../images/clear_blue.jpeg'
import palm_trees from '../images/palm_trees.jpeg'
import magic_sky from '../images/magic_sky.jpeg'
import sunset from '../images/sunset.jpeg'

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={brown_sand} alt="brown_sand" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={clear_blue} alt="clear_blue" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={palm_trees} alt="palm_trees" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={magic_sky} alt="magic_sky" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={sunset} alt="sunset" />
        </div>
      </div>
    </div>
  )
}
export default Gallery