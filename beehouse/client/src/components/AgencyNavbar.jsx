import React from 'react'
import {GiWaspSting} from 'react-icons/gi'
import AgencyModelCards from './AgencyModelCards'
import MiniDetailsCard from './MiniDetailsCard'
import {FaForumbee} from 'react-icons/fa'
import ChatButtonFloater from './ChatButtonFloater'
 
function AgencyNavbar() {

       
        
  return (

         <div className="w-screen  md:-ml-40  z-0">
   
    <nav className="bg-black shadow-md py-2 px-6 h-14 rounded   flex justify-between">
        <FaForumbee className='text-yellow-500 text-4xl mr-2'/>
        <div className="  flex space-x-20 text-md text-yellow-500">
        
        <button className="hover:text-gray-700 font-volkhorn block ml-2 md:hidden hover:underline text-xs  ">Jobs</button>
        <button className="hover:text-gray-700 font-volkhorn block ml-2 md:hidden hover:underline text-xs  ">Models</button>
        <button className="hover:text-gray-700 font-volkhorn block ml-2 md:hidden hover:underline text-xs  ">Settings</button>
        
        </div>
        
        <div className='flex justify-around  w-72 h-9 mb-10'>
            
           
            <div className=' w-10 h-10 rounded-full bg-[url("public/img/beeimage.jpg")] bg-cover '></div>
        
            <div className='-ml-8 mt-2'>
                <p className='text-yellow-500 font-volkhorn hidden text-xs  md:block'>Recruiter</p>
                <p className='text-yellow-500 font-volkhorn hidden text-xs  md:block'>Mike Agency</p>
            </div>
        </div>
        
        </nav>

   
     <div class=" p-6 md:ml-36  h-full">
   
        <h1 className="text-2xl   font-semibold sm:ml-5 lg:ml-12 mb-4">Welcome to Recruiters board</h1>

            <ChatButtonFloater/>
        
        <div className='  grid  grid-cols-2 md:grid-cols-2 lg:ml-12 sm:ml-5 lg:grid-cols-4 '>
            <MiniDetailsCard/>
            <MiniDetailsCard/>
            <MiniDetailsCard/>
            <MiniDetailsCard/>
        </div>
        <h1 className='font-bold text-xl sm:ml-5 lg:ml-12 mt-3'>Recommended</h1>
        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2'>
        <AgencyModelCards/>
        <AgencyModelCards/>
        <AgencyModelCards/>
        <AgencyModelCards/>
        <AgencyModelCards/>
        <AgencyModelCards/>
        </div>
     
      </div>
     </div>
    

  )
}

export default AgencyNavbar