import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='bg-black mt-20'>
        <div className='flex flex-col text-center p-6  md:w-10/12 md:mx-auto md:flex md:flex-row md:justify-between md:items-center md:py-6 md:px-6'>
           <div className='flex flex-col items-center'> 
            <img className='w-20 mb-5 md:w-24 md:mb-10' src={logo} alt='logo' />
            <div className='text-white flex flex-col mb-5 md:flex-row md:justify-between md:items-center gap-3'>
            <a  className='text-sm hover:underline hover:underline-offset-4' href='/'>About</a>
          <a className='text-sm hover:underline hover:underline-offset-4' href='/'>Careers</a>
          <a  className='text-sm hover:underline hover:underline-offset-4'href='/'>Events</a>
          <a  className='text-sm hover:underline hover:underline-offset-4'href='/'>Products</a>
          <a  className='text-sm hover:underline hover:underline-offset-4'href='/'>Support</a>
            </div>
           </div>
           <div className=''>
            <div className='flex justify-center gap-2 items-center mb-5 md:items-center md:gap-4 md: md:ml-32'>
                <img  className='w-4 cursor-pointer hover:underline hover:underline-offset-4 ' src={facebook} alt='facebook'/>
                <img  className='w-4  cursor-pointer hover:underline hover:underline-offset-4 ' src={twitter} alt='facebook'/>
                <img  className='w-4 cursor-pointer hover:underline hover:underline-offset-4' src={pinterest} alt='facebook'/>
                <img  className='w-4 cursor-pointer hover:underline hover:underline-offset-4' src={instagram} alt='facebook'/>
            </div>
            <div>
                <p className='text-gray-300 text-sm '>@ 2023 Loopstudios. All rights reserved</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer