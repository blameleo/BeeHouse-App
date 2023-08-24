import React from 'react'
import {GiWaspSting} from 'react-icons/gi'
import AgencyModelCards from '../components/AgencyModelCards'
import MiniDetailsCard from '../components/MiniDetailsCard'
import {FaForumbee} from 'react-icons/fa'
import ChatButtonFloater from '../components/ChatButtonFloater'


 
function AgencyDash() { 

       
        
  return (

    
   <div className='  mt-[50px] ml-[17%]  '>
    <div className='flex sm:flex-row justify-around flex-wrap'>
    <MiniDetailsCard/>
    <MiniDetailsCard/>
    <MiniDetailsCard/>
    <MiniDetailsCard/>
    </div>

    <div className=' grid grid-cols-1 ml-[5%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   '>
    <AgencyModelCards/>
    <AgencyModelCards/>
    <AgencyModelCards/>
    <AgencyModelCards/>
    <AgencyModelCards/>
    <AgencyModelCards/>
    

    </div>
    
    <ChatButtonFloater/>

   </div>
   
  

  )
}

export default AgencyDash


