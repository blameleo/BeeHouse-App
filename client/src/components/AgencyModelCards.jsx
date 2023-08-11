import React from 'react'

function AgencyModelCards() {
  return (
    <div className='rounded border mt-5 rounded-2xl bg-white shadow-2xl  w-80 h-80  '>
         <div className='mt-5 ml-5 w-20 h-20 rounded-full bg-[url("public/img/beeimage.jpg")] bg-cover '></div>
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