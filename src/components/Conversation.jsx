import React from 'react'

const Conversation = () => {
  return (
    <div className='w-full h-auto flex bg-red-600 flex-wrap justify-around'>
        <div className="left pt-6 pr-52 pb-6">
            <h2 className='italic text-2xl text-white'>Consult and start your fitness journey</h2>
            <h1 className='text-4xl text-white font-bold'>Let's start a Conversation</h1>
        </div>
        <div className="right pt-10 pb-6">
            <button className='bg-transparent px-16 font-semibold hover:bg-white hover:text-black transition-all duration-200 py-2 text-white border-2 border-white rounded-full'>Contact Us</button>
        </div>
    </div>
  )
}

export default Conversation