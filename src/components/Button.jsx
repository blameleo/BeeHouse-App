import React from 'react'
import { FcGoogle } from "react-icons/fc";


export default function Button({children,name,joinStyle,loginStyle,googleLoginStyle}) {
  return (
    <div><button className={name=="login" ? loginStyle:name == "Sign in with google" ? googleLoginStyle : null }>{name == "Sign in with google" && <FcGoogle className='mr-3'/> }{name}</button></div>
  )
}
