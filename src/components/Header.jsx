
'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import Navbar from './Navbar';

const Header = () => {

    


        
   

  return (
    <div className='header w-full h-screen bg-black  overflow-x-hidden '>
    <Navbar/>


    <div className='hero flex flex-wrap flex-shrink '> 
    <div className="absolute z-10 content mt-44  ml-44 md:ml-96">
        <h1 className='text-5xl  text-white font-medium'>Fitness and Health</h1>
        <h2 className='text-white text-3xl mt-4'>With double Power</h2>
        <button className='px-8 py-2 bg-transparent border-2 rounded mt-4 font-semibold border-red-600 text-white '>Read more &raquo;</button>
    </div>
    <div className="image md:ml-[42rem] ">
        <Image className='opacity-40 md:opacity-80'  src={'/pose.png'} height={'500'} width={'700'}></Image>
    </div>


    </div>
    </div>
  )
}

export default Header