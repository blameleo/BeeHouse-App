import React from 'react'

export default function Button({children,name,joinStyle}) {
  return (
    <div><button className={joinStyle}>{name}</button></div>
  )
}
