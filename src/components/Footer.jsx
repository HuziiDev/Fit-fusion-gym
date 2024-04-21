import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer-container w-full h-auto bg-black    '>
    <div className='w-[80%] pl-12 flex flex-wrap  justify-start gap-16 md:gap-28 pb-20 pt-20'>
        <div className='first-div   max-w-md'>
        <Link className='text-white text-3xl font-semibold pl-10' href={'/'}>
      <Image src={'/logo.png'} height={'100'} width={'100'}></Image>
    </Link>
    
            <h2 className='text-white font-extralight mt-5'>Its more than just a gym</h2>
            <div className='socials flex gap-4 mt-5'>
            <span><FaInstagram className='text-white' size={24} /></span>
            <span><FaFacebook className='text-white' size={24} /></span>
            <span><FaYoutube  className='text-white' size={24} /></span>
</div>

<h2 className='text-white mt-5 font-extralight text-xs'>All Rights Reserved &copy;2023 Fit Fusion Gym</h2>
            
        </div>
        <div className="second-div 20  max-w-md  ">
            <h2 className='text-white text-2xl mb-4'>Quick Links</h2>
         <Link href={''}>    <p className='text-white font-light ' >Gallery</p> </Link>
         <Link  href={''}>    <p className='text-white font-light mt-3' >Gallery</p> </Link>
         <Link  href={''}>    <p className='text-white font-light mt-3' >Gallery</p> </Link>
         <Link  href={''}>    <p className='text-white font-light mt-3' >Gallery</p> </Link>
         <Link  href={''}>    <p className='text-white font-light mt-3' >Gallery</p> </Link>
         
        </div>
        <div className="third-div   max-w-md ">
            <h2 className='text-white text-2xl mb-4'>Other Links</h2>
         <Link href={''}>    <p className='text-white font-light ' >Privacy Policy</p> </Link>
         <Link  href={''}>    <p className='text-white font-light mt-3' >Terms and Conditions</p> </Link>
        
         
        </div>
        </div>
    </div>
  )
}

export default Footer