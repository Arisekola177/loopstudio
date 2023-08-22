import React from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'

const Navbar = () => {
  return (
   <div className='w-full px-4 text-white  flex justify-between items-center mt-4 lg:w-10/12 lg:mx-auto'>
        <div >
          <img className='w-12 md:w-20 lg:w-24' src={logo} alt='logo' />
        </div>
        <div className='hidden md:flex justify-between items-center gap-4 '>
          <a  className='text-sm  hover:underline  hover:underline-offset-4' href='/'>About</a>
          <a className='text-sm hover:underline hover:underline-offset-4' href='/'>Careers</a>
          <a  className='text-sm hover:underline hover:underline-offset-4'href='/'>Events</a>
          <a  className='text-sm hover:underline hover:underline-offset-4'href='/'>Products</a>
          <a  className='text-sm hover:underline hover:underline-offset-4'href='/'>Support</a>
        </div>
        <div className='md:hidden'>
          <img className='w-4' src={hamburger} alt='hamburger' />
        </div>
       

   </div>
  )
}

export default Navbar