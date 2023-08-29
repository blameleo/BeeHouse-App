import React from 'react'
import {CiBadgeDollar} from 'react-icons/ci'

function MiniDetailsCard() {
  return (
    <div className='border rounded  flex items-center mt-10  rounded-lg  bg-pink-300 w-[160px] h-[70px]'>
        <div className='bg-pink-200  w-[40px]  h-[40px] ml-5 rounded flex justify-center items-center'>
        <CiBadgeDollar className='text-pink-300 text-3xl'/>
         </div>
         <div className='mt-3'>
         <p className='text-white ml-1 font-bold  text-xs'>60 models available </p>
         <p className='text-white ml-1 font-bold  mb-3 text-xs'>Recommended</p>
         </div>
    </div>
  )
}

export default MiniDetailsCard
