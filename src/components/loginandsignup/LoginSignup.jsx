import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'

const LoginSignup = () => {
    const [ countries, setCountries ] = useState([])
    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         const countryNames = data.map((country) => ({
    //           label: country.name.common,
    //           value: country.name.common,
    //         }));
    //         console.log('Fetched countries:', countryNames);
    //         setCountries(countryNames);
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching countries:', error);
    //       });
    // }, []);
    
    
  return (
    <div>
      <div className='border-b-[1px] border-[#bbb] p-2'>
        <span><RxCross1 /></span>
        <p className='text-[.9rem] font-[600]'>Log in or Sign up</p>
      </div>
      <div>
        <p className='text-[1.3rem] font-[500]'>Welcome to Airbnb</p>
        <form action="">
            <div className='flex flex-col'>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <div><input type="text" /></div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup
