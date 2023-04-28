import React from 'react'
import RegistrationButton from './RegistrationButton'

function ModelSignUp() {
  return (
    <div className=' '>
      
      <label className='font-volkhorn' htmlFor="">Firstname:</label><br></br>
      <input type="text" className='mb-5 border p-2 w-96  border-1 border-black rounded-md  'placeholder='Firstname' />
      <br></br>
      
      <label className='font-volkhorn' htmlFor="">Lastname:</label><br></br>
      <input type="text" className='mb-5  border p-2 w-96  border-1 border-black rounded-md  'placeholder='Lastname'/>
      <br></br>
      
      <label className='font-volkhorn' htmlFor="">Email:</label><br></br>
      <input type="email"placeholder='Email' className='mb-5  border p-2 w-96  border-1 border-black rounded-md  '/>
      <br></br>
      
      <label className='font-volkhorn' htmlFor="">Password:</label><br></br>
      <input type="password" placeholder='Password' className='mb-5  border p-2 w-96  border-1 border-black rounded-md  '/>
      
      
      <br></br>
      <label className='font-volkhorn' htmlFor="">Confirm Password:</label><br></br>
      <input type="password" name="" id="" placeholder='Confirm Password' className=' mb-5  border p-2 w-96  border-1 border-black rounded-md  ' />
      <br></br>
      <div className='flex justify-center mt-7' >
      <RegistrationButton
      label="Sign up"
      />
      </div>
    </div>
  )
}

export default ModelSignUp