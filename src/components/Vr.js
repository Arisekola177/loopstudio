import React from 'react'
import vr from '../images/desktop/image-interactive.jpg'

const Vr = () => {
  return (
    <div className='w-full h-full mt-10'>
        <div className='w-full flex flex-col  md:flex-row md:justify-between md:items-center md:gap-3 lg:w-10/12 lg:mx-auto'>
            <div className='w-full md:w-2/4 '>
            <img className='w-full px-8 object-cover' src={vr} alt='vr' />
            </div>
          
           <div className='w-full text-center  px-8 md:w-2/4  '>
                 <h2 className='uppercase font-semibold text-md mb-5 md:text-2xl md:mb-5 '> <span className='block'> The leader in</span> interactive VR</h2>
                 <p className='text-sm w-full'> Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
           </div>
        </div>
    </div>
  )
}

export default Vr