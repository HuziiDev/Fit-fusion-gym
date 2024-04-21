import React from 'react'

const PricingCard = ({title, membershipPrice, desc }) => {
  return (
    <div className="pricing-card bg-white max-w-lg mt-10 ">
    <h1 className='text-black text-3xl font-semibold pl-3 pt-3'>{title}</h1>
    <div className='flex pl-3 pt-4 gap-4'>
    <div className='bg-red-700 w-1 h-16'></div>
    <p className='pt-4 text-3xl font-bold '>{membershipPrice}</p>
    </div>
    <p className='pl-2 pt-4 text-medium font-medium italic'>{desc}.</p>
  <div className='pt-8 pl-2 pb-4'>
    <button className=' px-8 py-2 text-white bg-gray-900'>Join Now</button>
    </div>
</div>
  )
}

export default PricingCard