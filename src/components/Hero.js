import React from 'react'
import hero from '../images/desktop/image-hero.jpg'
import heromobile from '../images/mobile/image-hero.jpg'

const Hero = () => {
  return (
    <div className='relative w-full'>
        <img className='hidden md:block w-full h-full object-cover' src={hero} alt='hero'></img>
        <img className='w-full h-full object-cover md:hidden' src={heromobile} alt='heromobile' />
        <div>
          <div  className='absolute top-80 left-10 border-[1px] w-48 border-white md:w-1/3 md:top-48 md:left-16 lg:top-80 lg:left-20'>
            <h1 className='text-white px-1 lg:px-6 ' >
              <span className='block text-sm md:text-xl lg:text-3xl'>IMMERSIVE</span> 
                <span className='block text-sm  md:text-xl lg:text-3xl'> EXPERIENCES</span>    
                 <span className='text-sm  md:text-xl lg:text-3xl'>THAT DELIVER</span>      
              </h1>
          </div>
        </div>
    </div>
  )
}
export default Hero