import React from 'react'
import EstateList from './EstateList'
function Categories() {
  return (
    <div>
          <div className=' bg-[url("https://paytolet.com/storage/news/odion-ighalos-mansion-1024x779.jpg")] bg-black bg-opacity-75 p-10  w-full bg-cover relative'>
          <div className='absolute inset-0 bg-black bg-opacity-75'></div>
          <div className='relative mt-20'>
          <EstateList/>
          </div>
          </div>
    </div>
  )
}

export default Categories;