import React from 'react'
import deep from '../images/desktop/image-deep-earth.jpg';
import night from '../images/desktop/image-night-arcade.jpg';
import soccer from '../images/desktop/image-soccer-team.jpg';
import grid from '../images/desktop/image-grid.jpg';
import above from '../images/desktop/image-from-above.jpg'
import pocket from '../images/desktop/image-pocket-borealis.jpg';
import curiosity from '../images/desktop/image-curiosity.jpg';
import fisheye from '../images/desktop/image-fisheye.jpg'
import deepmobile from '../images/mobile/image-deep-earth.jpg'
import nightmobile from '../images/mobile/image-night-arcade.jpg';
import soccermobile from '../images/mobile/image-soccer-team.jpg';
import gridmobile from '../images/mobile/image-grid.jpg';
import abovemobile from '../images/mobile/image-from-above.jpg'
import pocketmobile from '../images/mobile/image-pocket-borealis.jpg';
import curiositymobile from '../images/mobile/image-curiosity.jpg';
import fisheyemobile from '../images/mobile/image-fisheye.jpg'


const Grid = () => {
   
  return (
    <div className='mt-8'>
        <div className='w-full grid grid-cols-1 p-8 gap-6  md:w-10/12 md:mx-auto md:grid md:grid-cols-4 md:gap-10'>
             <div className='relative'>
                <img className='hidden md:block' src={deep} alt='deep' />
                <img className='md:hidden' src={deepmobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80 '>
                    <h2 className='text-white text-sm uppercase'><span className='block'>deep</span> earth</h2>
                </div>
             </div>
             <div className='relative'>
                <img className='hidden md:block' src={night} alt='deep' />
                <img className='md:hidden' src={nightmobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80'>
                    <h2 className='text-white uppercase'><span className='block'> Night </span> arcade</h2>
                </div>
             </div>
             <div className='relative'>
                <img className='hidden md:block' src={soccer} alt='deep' />
                <img className='md:hidden' src={soccermobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80'>
                    <h2 className='text-white uppercase'><span className='block'>soccer</span> team vr</h2>
                </div>
             </div>
             <div className='relative'>
                <img className='hidden md:block' src={grid} alt='deep' />
                <img className='md:hidden' src={gridmobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80'>
                    <h2 className='text-white uppercase'><span className='block'>The</span> grid</h2>
                </div>
             </div>
             <div className='relative'>
                <img className='hidden md:block' src={above} alt='deep' />
                <img className='md:hidden' src={abovemobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80'>
                    <h2 className='text-white uppercase'><span className='block'>from</span> up above vr</h2>
                </div>
             </div>
             <div className='relative'>
                <img className='hidden md:block' src={pocket} alt='deep' />
                <img className='md:hidden' src={pocketmobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80'>
                    <h2 className='text-white uppercase'><span className='block'>pocket</span> borealis</h2>
                </div>
             </div>
             <div className='relative'>
                <img className='hidden md:block' src={curiosity} alt='deep' />
                <img className='md:hidden' src={curiositymobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80'>
                    <h2 className='text-white uppercase'><span className='block'>The</span> curiosity</h2>
                </div>
             </div>
             <div className='relative'>
                <img className='hidden md:block' src={fisheye} alt='deep' />
                <img className='md:hidden' src={fisheyemobile} alt='mobile'/>
                <div className='absolute top-2/4 left-6 md:top-32 lg:top-80'>
                    <h2 className='text-white uppercase'><span className='block'>make it</span> fisheye</h2>
                </div>
             </div>
            
             
            
           
        </div>
    </div>
  )
}

export default Grid