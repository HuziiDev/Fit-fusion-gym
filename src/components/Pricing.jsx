import React from 'react'
import PricingCard from './PricingCard'
const Pricing = () => {
  return (
    <div className='pricing-container w-full h-auto  '>
        <div className="pricing-content relative z-10 text-center pt-24">
            <h2 className=' text-red-700 text-2xl font-semibold italic mb-3'>Pricing</h2>
            <h1 className='text-slate-200  text-5xl font-semibold'>Our Packages</h1>
        </div>
        <div className="relative z-10 gap-4   card-container flex flex-wrap flex-shrink w-full h-auto bg-transparent justify-center  ">
           <PricingCard
            title="Regular Gym"
            membershipPrice="₹10,000/year"
            desc="Join regular gym classes for daily training. Get discount by choosing Quaterly, Half Yearly, or Yearly packages"

           />
           <PricingCard
            title="Regular Gym"
            membershipPrice="₹10,000/year"
            desc="Join regular gym classes for daily training. Get discount by choosing Quaterly, Half Yearly, or Yearly packages"

           />
        </div>
    </div>
  )
}

export default Pricing