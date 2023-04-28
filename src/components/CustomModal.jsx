import React from 'react'
import Button from './Button'
import Logo from './Logo'


function CustomModal() {
    
        


    return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className="bg-white text-center h-96 w-96 p-10 rounded ">
        <form>
        <Button
              name="Sign up with google"
              signUpLoginStyle=" w-full border rounded py-1 flex justify-center items-center"
            />
            <label htmlFor="firstName">Firstname:</label><br/>
            <input  placeholder="Enter your First name"
                name=""
                className="bg-gray-300 w-48 h-10 border rounded placeholder:text-sm placeholder:pl-3" type="text" /><br/>
            <label htmlFor="lastname">Lastname:</label><br/>
            <input className='bg-gray-300 w-48 h-10' type="text" name="lastname" id="lastname" /><br/>
            <label htmlFor="password">Password</label><br/>
            <input className='bg-gray-300 border-yellow-600 w-48 h-10' type="password" name="password" id="password" /><br/>
            <label htmlFor="password">Confirm Password</label><br/>
            <input className='bg-gray-300 w-48 h-10 border-yellow-600' type="password" />
            <Button
            name="Sign up"
            className="border"
            />



        </form>
        </div>
    </div>
  )
}

export default CustomModal