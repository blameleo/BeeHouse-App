import React from 'react'
import Logo from './Logo'
import {FaForumbee} from 'react-icons/fa'
import {SlBadge} from 'react-icons/sl'
import {GrGroup} from 'react-icons/gr'
import {FiSettings} from 'react-icons/fi'
function AgencySidebar() {
  return (
    <div className='w-[250px] hidden md:block bg-gray-100 z-10 shadow-2xl h-screen  rounded-tr-[120px] '>
        <div className='mt-3 ml-2'>
        <Logo />
       
        </div>
        
        <nav className=" text-black w-1/6 py-4 px-2 ">
    <div className='mt-10'>
        
     
        <button  className=" block shadow-lg bg-white      font-volkhorn w-56 hover:bg-yellow-500 border-black  hover:border-2 mt-5 p-2 ">Jobs <SlBadge className='text-xl -mt-5 ml-[140px]'/> </button>
      
     
        <button  className=" block shadow-lg bg-white     font-volkhorn w-56 hover:bg-yellow-500 border-black  hover:border-2 mt-5 p-2 ">Models <GrGroup className='text-xl -mt-5 ml-[140px]'/></button>

        <button  className=" block shadow-lg bg-white    font-volkhorn w-56 hover:bg-yellow-500 border-black  hover:border-2 mt-5 p-2 ">Settings <FiSettings className='text-xl -mt-5 ml-[140px]'/></button>


      
     
    </div>
  </nav>
    </div>
  )
}

export default AgencySidebar