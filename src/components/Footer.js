import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { FaAddressCard } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 mt-10'>
        <div className='w-10/12 mx-auto py-8 flex flex-col text-center md:flex-row md:text-start md:justify-between md:items-center '>
              <div className='flex flex-col gap-4 mx-auto md:mx-0'>
                 <div className='flex gap-4 ml-6 md:ml-0'>
                    <FaBuilding className='text-5xl text-orange-500' />
                   <div className='text-white font-display'>
                    <h1 className='uppercase text-2xl  font-display'>Sam<span className='text-orange-500'>a</span>juan</h1>
                    <span className='font-display'>Build Your Dreams</span>
                   </div>
                   </div>
                   <p className='w-72 text-white font-display mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore.</p>
               </div>
               <div className='text-white mt-6'>
                    <h1 className='uppercase text-2xl font-display mb-6'>Useful Links</h1>
                    <div className='flex justify-center gap-2 md:justify-between'>
                        <div className='flex flex-col gap-2'>
                        <Link className='mb-2 hover:text-orange-500' to='/'>Home</Link>
                        <Link className='mb-2 hover:text-orange-500' to='/projects'>Projects</Link>
                        <Link className='mb-2 hover:text-orange-500' to='/service'>Services</Link>
                        </div>
                        <div className='flex flex-col gap-2'>
                        <Link className='mb-2 hover:text-orange-500' to='/about'>About</Link>
                        <Link className='mb-2 hover:text-orange-500' to='/contact'>Contact</Link>
                        </div>
                       
                    </div>
               </div>

               <div className='text-white mt-3'>
                   <h1 className='uppercase text-2xl font-display mb-6'>Contact us</h1>
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-4 mb-2'>
                            <FaAddressCard />
                            <p>Akoka</p>
                        </div>
                        <div className='flex gap-4 mb-2'>
                            <FaPhone />
                            <p>+234 906462752782</p>
                        </div>
                        <div className='flex gap-4 '>
                            <FaMailBulk />
                            <p>Samajuan@gmail.com</p>
                        </div>
                    </div>
               </div>
        </div>
        <p className='border-b border-white w-full'></p>
        <p className='text-center text-white font-display py-5'>© Samajuan 2023, developed by Aztech</p>
    </div>
  )
}

export default Footer