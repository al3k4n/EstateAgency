import React from 'react'

function About() {
  return (
    <div>
        <div className=' flex justify-center'>
        <div className=' md:flex md:gap-10  bg-[#d30a0a] w-fit p-20'>
            <div  className=" md:w-[661px] md:h-[426px] text-black text-opacity-60 md:text-[34px] font-normal">
        <h1 className=' text-white text-lg md:text-[54px] font-bold sm:mb-10 sm:mt-10 '>About Us</h1>
        <p className=' text-white'>We’re hunting for the best gems on the Nigerian real estate market. With our help you’ll find any house that you want, be it a humble winter cottage in the state capital of Benue Makurdi, a median summer apartment in Gboko, or a huge residential building in Otukpo...</p>
    </div>
    <div>
        <img className=" sm:mt-10 md:w-[493px] md:h-[508px]"  src='https://paytolet.com/storage/news/odion-ighalos-mansion-1024x779.jpg' alt='housefair'/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default About;