import {useContext} from 'react';
import MenuIcon from './MenuIcon';
import purposeContext from '../store/purpose-context';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const ctx = useContext(purposeContext)
  return (
    <header className=' fixed z-10 top-0 left-0 w-full h-20 bg-[--col] text-white flex justify-between items-center px-[10%] '>
    <span onClick={ctx.navFuction} className=' md:hidden ' ><MenuIcon/></span>
    
 <div className={styles.logo}>


    <h1 className=' text-3xl'>House<span className={styles.text}>Fair</span></h1>
 </div>
  <ul className='hidden md:flex gap-10'>
    <li className=' text-xl'><Link to='/'>Home</Link></li>
    <li  className=' text-xl'><Link to='/about'>About us</Link></li>
    <li  className=' text-xl'><Link to='/categories'>Categories</Link></li>
    <li  className=' text-xl'><Link to='/login'>Accounts</Link></li>
  </ul>
   
</header>
  )
}

export default Header;