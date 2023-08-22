import React from 'react'
import Grid from './Grid'

const Creation = () => {
  return (
    <div className='mt-10 '>
        <div className='w-full md:w-10/12 md:mx-auto md:flex md:justify-between md:items-center'>
            <h1 className='uppercase text-center md:text-2xl font-extralight'>Our Creations</h1>
            <button className='hidden md:block border-[1px] space-x-4 px-8 uppercase border-black hover:bg-black hover:text-white '>see all</button>
        </div>
        <div>
            <Grid />
        </div>
    </div>
  )
}

export default Creation