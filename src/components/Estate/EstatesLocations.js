import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import LocationCarousel from '../Layout/LocationCarousel';
import { Link } from 'react-router-dom';
function EstatesLocations() {
  return (
    <div>
        <div className=' bg-[url("https://paytolet.com/storage/news/odion-ighalos-mansion-1024x779.jpg")] bg-black bg-opacity-75 p-10 md:p-40  w-full bg-cover relative'>
        
        <div className='absolute inset-0 bg-black bg-opacity-75'></div>
          <div className=' relative text-center mt-20 '>
        <h1 className='text-white text-xl md:text-3xl font-bold '>Do you need {<TypeAnimation
      sequence={[
        'Duplex',
        1000, 
        'a Bedroom',
        1000,
        'Self-contained',
        1000,
        'Office space',
        1000
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />   } ?</h1>
      
        <h2 className='text-white text-xl md:text-3xl font-light mt-5 mb-5'>We bring house hunting to your finger tips!!</h2>
       <div className=' hidden sm:flex justify-center '>
      <Link to='/categories' className=" no-underline text-center w-2/5  bg-[#d30a0a] text-white mt-4 mb-2 font-semibold  p-1 px-2 hover:text-[#d30a0a] hover:bg-white hover:shadow-md shadow-black ease-in-out rounded-md h-10 ">
      Explore
    </Link>

    </div>
    <span className=' flex justify-center sm:hidden'>
  <LocationCarousel/>
  </span>
    </div>
        </div>
    </div>
    
  )
}

export default EstatesLocations;

