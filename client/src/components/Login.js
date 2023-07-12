import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [passwordVisible, setPasswordVisible] = useState(false);
  const icon = passwordVisible ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {email, password}
    axios.post(`http://localhost:8000/api/login`, user, { withCredentials: true })
      .then((res) => {
        console.log(res.data, "Successful log in!")
        Cookies.set('loggedIn', true);
        navigate('/deals')
      })
      // login user and navigate to dashboard
      // clear form
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="container max-w-full mx-auto py-24 px-6">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                  <span>
                    By{" "}
                    <Link
                      className="text-blue-500"
                      href="https://twitter.com/framansi"
                    >
                      @dev_sistas
                    </Link>
                  </span>
                </div>
                <div className="text-center font-semibold text-black">
                  Login to complete your reservation!
                </div>

                <form onSubmit={submitHandler} className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">
                        Email
                      </span>
                      <input
                        type="text"
                        className="text-md block px-3 py-2  rounded-lg w-full 
                        bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        placeholder="Email"
                        aria-label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">
                        Password
                      </span>
                      <div className="relative">
                        <input
                          placeholder="Password"
                          type={passwordVisible ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="text-md block px-3 py-2  rounded-lg w-full 
                        bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        />
                          <span
                            className="text-dark text-lg bg-yellow-50 absolute"
                            style={{
                                position: "absolute",
                                top: "8px",
                                right: "10px",
                                zIndex: "1000",
                                cursor: "pointer",
                            }} 
                            onClick={togglePasswordVisibility}
                            >
                              {icon}</span>                  
                        </div>
                      </div>                    
                    <button
                      className="mt-3 text-lg font-semibold 
                            bg-gray-800 w-full text-white rounded-lg
                            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;