import React from 'react'
import Logo from './Logo'

function AgencySidebar() {
  return (
    <div className='w-[250px] bg-white z-10 shadow-2xl h-screen rounded rounded-tr-[120px] '>
        <div className='mt-3 ml-2'>
        <Logo agencystyle=""/>
        </div>
        
        <nav className=" text-black w-1/6 py-4 px-2 ">
    <div className=''>
        <p className=' text-xl font-volkhorn'>filter</p>
      <div className="mb-4">
        <button  className="block hover:text-gray-400 hover:underline">Age</button>
      </div>
      <div className="mb-4">
        <button  className="block hover:text-gray-400 hover:underline ">complexion</button>
      </div>
      <div>
        <button  className="block hover:text-gray-400 hover:underline">whatwhat</button>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default AgencySidebar