import React, { useEffect } from 'react'
import axios from 'axios'
import Activities from './Activities'

const Booking = () => {
 
  useEffect(() => {
    const fetchHotelMetadata = async () => {

      const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
        params: {
          q: 'new york',
          locale: 'en_US',
          langid: '1033',
          siteid: '300000001'
        },
        headers: {
          'X-RapidAPI-Key': '1921d4810dmshd9add53bc02a73ep12c0f9jsn02792bdf7e51',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    // const options = {
    //   method: 'GET',
    //   url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
    //   headers: {
    //     'X-RapidAPI-Key': '1921d4810dmshd9add53bc02a73ep12c0f9jsn02792bdf7e51',
    //     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    }
    fetchHotelMetadata();
  }, []);

  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center pt-16">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2" >
            <option value="">Grand Turks</option>
            <option value="">Curacao</option>
            <option value="">Costa Rica</option>
            <option value="">Puerto Rico</option>
          </select>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label htmlFor="">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label htmlFor="">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>

        <div className="flex flex-col my-2 p-2 w-full">
          <label>Search</label>
          <button className="w-full rounded-lg">Rates & Availabilities</button>
        </div>
      </form>
      <div className="pt-16">
        <Activities />
      </div>
      </div>
  )
}

export default Booking