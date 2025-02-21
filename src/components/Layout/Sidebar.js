import {useContext} from 'react'
import { Link } from 'react-router-dom'
import purposeContext from '../store/purpose-context'
function Sidebar() {
  const ctx = useContext(purposeContext)
  return (
    
    
      <ul className='fixed w-[35%] h-screen bg-[#010229] top-0 -left-0 flex flex-col text-center z-10 '>
        <Link to='/' onClick={ctx.navCloseFunc} className=' mt-20 leading-5 p-4 flex flex-col  items-center text-white '><li className=' hover:bg-red-700 p-2 rounded '>Home</li></Link>
        <Link to='/about'  onClick={ctx.navCloseFunc}  className='  leading-5 p-4 flex flex-col  items-center text-white '><li className=' hover:bg-red-700 p-2 rounded w-full '>About us</li></Link> 
        <Link to='/categories'  onClick={ctx.navCloseFunc} className='  leading-5 p-4 flex flex-col  items-center text-white '><li className=' hover:bg-red-700 p-2 rounded '>Categories</li></Link>
        <Link to='/login'  onClick={ctx.navCloseFunc} className='  leading-5 p-4 flex flex-col  items-center text-white '><li className=' hover:bg-red-700 p-2 rounded '>Account</li></Link>
      </ul>
    
  )
}

export default Sidebar