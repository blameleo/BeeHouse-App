import React from 'react'
import ModelCardCarousel from './ModelCardCarousel'

function AgencyModelCards() {
  return (
    <div className=' hover:scale-105 transition duration-500 rounded border mt-10 rounded-2xl bg-white shadow-2xl  w-[360px] h-[450px] '>
         <ModelCardCarousel/>
         <p className='mt-5 ml-5'>Ronima Dean</p>
         <p className='text-gray-400 ml-5'>Tall dark Male model </p>

         <div className='grid grid-cols-3 ml-3 '>
            <div className='border  w-[80px] mt-3 text-center rounded text-gray-500  bg-gray-200'>Tall</div>
            <div className='border  w-[80px] mt-3 text-center rounded text-gray-500  bg-gray-200'>Fair</div>
            <div className='border  w-[80px] mt-3 text-center  rounded text-gray-500  bg-gray-200'>Dark</div>
            <div className='border  w-[80px] mt-3 text-center rounded text-gray-500  bg-gray-200'>Ugly</div>
            
         </div>

         <div className='flex justify-center mt-7  '>
            <button className='mr-5 bg-yellow-500 border border-2 border-black h-[40px] w-[100px]'>Connect</button>
            <button className=' border border-yellow-500 h-[40px] w-[100px]'>Save</button>
         </div>

    </div>
  )
}

export default AgencyModelCards