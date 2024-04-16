import React from 'react'
import Link from 'next/link'
import Image from "next/image"

const Header = () => {
  return (
    <div className='header w-full h-auto bg-black  '>
    <div className='navbar w-full h-auto  flex justify-between pt-4 flex-wrap'>
    <Link className='text-white text-3xl font-semibold pl-10' href={'/'}>
      <Image src={'/logo.png'} height={'100'} width={'100'}></Image>
    </Link>
    
    <nav className='flex gap-10 pr-10 pt-4'>
         <Link className='text-white font-medium' href={'/home'}>Home</Link>
         <Link className='text-white font-medium' href={'/'}>About</Link>
         <Link className='text-white font-medium' href={'/'}>Services</Link>
         <Link className='text-white font-medium' href={'/'}>Gallery</Link>
         <Link className='text-white font-medium' href={'/'}>Clients</Link>
    </nav>

    </div>


    <div className='hero flex flex-wrap flex-shrink'> 
    <div className="content mt-44  ml-44">
        <h1 className='text-5xl  text-white font-medium'>Fitness and Health</h1>
        <h2 className='text-white text-3xl mt-4'>With double Power</h2>
        <button className='px-8 py-2 bg-transparent border-2 rounded mt-4 font-semibold border-red-600 text-white'>Read more &raquo;</button>
    </div>
    <div className="image">
        <Image className='a opacity-80'  src={'/pose.png'} height={'500'} width={'700'}></Image>
    </div>


    </div>
    </div>
  )
}

export default Header