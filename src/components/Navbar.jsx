import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import Image from "next/image"
const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const links = [
        {
          id:1,
          name:'Home',
          href:'/'
        },
        {
          id:1,
          name:'About',
          href:'/'
        },
        {
          id:1,
          name:'Services',
          href:'/'
        },
        {
          id:1,
          name:'Gallery',
          href:'/'
        },
        {
          id:1,
          name:"Clients",
          href:'/'
        },
      ]
  return (
    <div className='navbar w-full h-auto  flex justify-between pt-4 flex-wrap'>
    <Link className='text-white text-3xl font-semibold pl-10' href={'/'}>
      <Image src={'/logo.png'} height={'100'} width={'100'}></Image>
    </Link>
    
    <nav className='hidden md:flex gap-10 pr-10 pt-4'>
            {
              links.map(({id, name , href}) => (
                <Link key={id} className='text-white font-medium' href={href}>{name}</Link>
              ))
            }
             
         
         {/* <Link className='text-white font-medium' href={'/'}>About</Link>
         <Link className='text-white font-medium' href={'/'}>Services</Link>
         <Link className='text-white font-medium' href={'/'}>Gallery</Link>
         <Link className='text-white font-medium' href={'/'}>Clients</Link> */}
    </nav>
          {
            isActive && (
              <div className='absolute z-20 w-full h-screen bg-zinc-700 top-0 '>
          <nav className='flex flex-col gap-12 mt-16 justify-center items-center'>
          {
              links.map(({id, name , href}) => (
                <Link key={id} className='text-white font-semibold text-4xl ' href={href}>{name}</Link>
              ))
            }

          </nav>
         </div>
    
            )
          }
     

        {isActive ?   
          <div className='md:hidden pr-4 pt-3 cursor-pointer z-30'  onClick={() => setActive((prev)=> !prev)} >
          <svg fill="#ffffff" width="45px" height="45px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
</svg>

</div>
        
        :<div className='md:hidden pr-4 pt-3 cursor-pointer'  onClick={() => setActive((prev)=> !prev)} >
    <svg width="50px" height="50px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 12.32H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 18.32H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 6.32001H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>}


  

    </div>
  )
}

export default Navbar