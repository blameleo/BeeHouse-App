import React from 'react'
import AgencySidebar from '../components/AgencySidebar'
import AgencyNavbar from '../components/AgencyNavbar'

function Agency() {
  return (
    <div className='flex w-screen  '>
      
     <AgencySidebar/>
     
   
     <AgencyNavbar/>
     
    </div>
  )
}

export default Agency