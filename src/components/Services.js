import React from 'react'
import products from '../assets/data/products'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='w-full mt-10 ' >
        <div className='w-11/12 mx-auto'>
             <h1 className='font-display text-4xl text-center font-semibold text-orange-500'>Our Services</h1>
             <div className='w-10/12 md:w-full text-center md:text-start  mt-10 grid grid-cols-1 mx-auto md:grid-cols-3 gap-10 lg:gap-5'>


              {
                products.map((product) => (
                  <div>
                  <img className='w-96 rounded-md cursor-pointer h-64 ' src={product.image} alt='service' />
                  <div className='font-display'>
                      <h2 className='text-2xl font-semibold mt-5 mb-5'>{product.title}</h2>
                      <p className='w-96'>{product.shortDesc} </p>
                          <Link className='block uppercase mt-5 hover:text-orange-500 hover:underline hover:underline-offset-4' to='/'>Read More</Link>
                     
                  </div>
                   </div>

                ))
              }
                 
               
                
                
                
             </div>
        </div>
        <p className='w-10/12 mx-auto mt-10 border-[2px] border-b border-orange-500 shadow-lg'></p>
    </div>
  )
}

export default Services