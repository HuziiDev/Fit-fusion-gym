import React from 'react'

const Conversation = () => {
  return (
    <div className='convo-container w-full h-auto flex flex-col md:flex-row bg-red-800 flex-wrap justify-around'>
        <div className="convo-content left pt-6 md:pr-52 md:pb-6 pl-16   ">
            <h2 className='italic text-2xl text-white'>Consult and start your fitness journey</h2>
            <h1 className='text-4xl text-white font-bold'>Let's start a Conversation</h1>
        </div>
        <div className='convo-btn right pt-5 pb-5 md:pt-10 md:pb-4 pl-16'>
            <button className='bg-transparent px-16 font-semibold hover:bg-white hover:text-black transition-all duration-200 py-2 text-white border-2 border-white rounded-full'>Contact Us</button>
        </div>
    </div>
  )
}

export default Conversation