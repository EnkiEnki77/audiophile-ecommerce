import React from 'react'

const Counter = () => {
  return (
    <div className="flex bg-grey w-32 h-12 items-center justify-around">
        <p className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">-</p>
        <p className="w-1/3 h-full flex justify-center items-center text-[13px] font-bold">1</p>
        <p className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">+</p>
    </div>
  )
}

export default Counter