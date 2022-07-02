import React, { useState, MouseEvent } from 'react'

type CounterProps = {
  counter: number, 
  decrement: (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => void
  increment: (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => void
  defaultCounter?: number
  className:'counter-sm' | 'counter-lg'
}

const Counter = (props: CounterProps) => {

  const [counter, setCounter] = useState(props.defaultCounter || 0)

  return (
    <div className={`${props.className} flex bg-grey items-center justify-around`}>
        <p onClick={props.decrement} className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">-</p>
        <p className=" w-1/3 h-full flex justify-center items-center text-[13px] font-bold">{props.counter}</p>
        <p onClick={props.increment} className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">+</p>
    </div>
  )
}

export default Counter