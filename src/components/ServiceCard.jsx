import React from 'react'


const ServiceCard = ({title,desc , icon: Icon }) => {
  return (
    <div className="service-card flex mx-auto  pt-10 pb-10 justify-center items-center gap-4">
    <div className="icon">
    <Icon size={68} className='text-white' />
    </div>
    <div className="content">
      <h1 className='text-gray-200 text-2xl font-medium '>{title}</h1>
      <p className='text-lg text-gray-400'>{desc}</p>
    </div>
     
  
     
  </div>
  )
}

export default ServiceCard