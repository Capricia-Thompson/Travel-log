import React, {useState} from 'react'
import axios from 'axios'
import { FaBars } from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa'
import Cookies from 'js-cookie'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const user = Cookies.get('user');
  const isLoggedIn = user === 'true';
  // loggedIn will be a string representation of the boolean value 'true' 
  // or undefined if the cookie is not set
  // You can convert it to a boolean value using JSON.parse or other methods
  console.log(isLoggedIn)
  const handleNav = () => {
    setNav(!nav)
  }

  const logoutFunc = () => {  
    axios.get('http://localhost:8000/api/logout', { withCredentials: true })
        .then(res => {
          console.log(res.data.msg)
          Cookies.remove('user');
        })
  }

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/deals">Deals</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>       
        {isLoggedIn ? 
        (<li>
          <a href="/" className="hover:text-blue-400" onClick={logoutFunc}>Logout</a>
        </li> )          
        : (<li>
          <a href="/login" className="hover:text-blue-400">Login</a>
        </li>
        )} 
        <li>
          <a href="/register" className="hover:text-blue-400">Sign Up</a>
        </li>            
      </ul>

      <div className="flex justify-between">
        <FaFacebookF className="mx-4"/>
        <FaTwitter className="mx-4"/>
        <FaGooglePlusG className="mx-4"/>
        <FaInstagram className="mx-4"/>
      </div>

      {/* hamburger icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer"/>
      </div>

      {/* mobile menu */}
      <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
      <ul className="h-full w-full text-center pt-12">
        <li className="text-2xl py-8 hover:text-blue-600">
          <a href="/home">Home</a>
        </li>
        <li className="text-2xl py-8 hover:text-blue-600">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="text-2xl py-8 hover:text-blue-600">
          <a href="/deals">Deals</a>
        </li>
        <li className="text-2xl py-8 hover:text-blue-600">
          <a href="/contact">Contact</a>
        </li>     
        {isLoggedIn ? (
        <li className="text-2xl py-8 hover:text-blue-600">
          <a href="/login" onClick={logoutFunc}>Logout</a>
        </li>  
        ) : (
        <li className="text-2xl py-8 hover:text-blue-600">
          <a href="/login">Login</a>
        </li>  
        )}      
      </ul>
      </div>
    </div>
  )
}

export default Navbar