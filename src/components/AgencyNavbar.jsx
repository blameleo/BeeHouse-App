import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

function AgencyNavbar() {
  return (

         <div className="w-screen -ml-40 pl-10 z-0">
   
   <nav className="bg-black shadow-md py-2 px-6 h-14 rounded   flex justify-between">
     <div className=" ml-40 flex space-x-20 text-md text-yellow-500">
       
       <button className="hover:text-gray-700 hover:underline">Network</button>
       <button className="hover:text-gray-700 hover:underline">Model</button>
       <button className="hover:text-gray-700 hover:underline">rating</button>
       <button className="hover:text-gray-700 hover:underline">Anything</button>
       
       </div>

       <div className='flex justify-around  w-72 h-9 mb-10'>
        <div className='border flex justify-center border-yellow-500 p-2 w-10 h-10 rounded rounded-full '>
        <AiOutlineSearch className='text-yellow-500 text-xl '/>
        </div>
        <div className=' w-10 h-10 rounded-full bg-[url("public/img/beeimage.jpg")] bg-cover '></div>
       
        <div className='-ml-8'>
            <p className='text-yellow-500 font-volkhorn'>Recruiter</p>
            <p className='text-yellow-500 font-volkhorn'>Mike Agency</p>
        </div>
       </div>
     
   </nav>

   
   <div class="p-6 ml-32  h-full">
   
     <h1 class="text-2xl font-semibold mb-4">Welcome to Agency board</h1>
     
      </div>
     </div>
    

  )
}

export default AgencyNavbar