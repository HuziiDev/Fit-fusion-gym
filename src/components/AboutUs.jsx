import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className='w-full h-auto flex flex-wrap flex-shrink bg-black justify-evenly pt-20 '>
        <div className="about-image-container max-w-lg   pb-10">
         
           <Image className=' about-us-img rounded shadow-md shadow-slate-400' src={'/gymbros.webp'} width={500} height={500}></Image>

        </div>
        <div className="about-us-content max-w-lg pb-10">
        <h2 className='text-2xl mb-4 italic text-white'>About us</h2>
        <h1 className='text-3xl mb-4 text-red-600 font-bold'>WHO ARE WE?​</h1>
        <p className='text-white text-lg w-[70%]  '>Fit N Fab is a workout studio for women in Delhi. Six Days Six Fun Workouts Guaranteed Weight & Inch loss Programs. We believe that fitness should not be one dimensional and we know that you can maximise your full potential with an all-encompassing workout. Flying solo is great but striving together is better which is why we offer the highest possible variety at an affordable cost.</p>

        </div>
    </div>
  )
}

export default AboutUs