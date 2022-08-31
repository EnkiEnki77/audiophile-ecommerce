import React, { useState, MouseEvent } from 'react'
import {useAppDispatch, useAppSelector} from '../hooks'
import {increment, decrement} from '../features/counter'

type CounterProps = {
  className:'counter-sm' | 'counter-lg',
  counter?: number,
  increment?: () => void,
  decrement?: () => void
  totalUp?: (price: number) => void
  totalDown?: (price: number) => void
  price?: number
}

const Counter = (props: CounterProps) => {

  const counter = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  console.log(props.className)

  return (
   <>
      {props.className === 'counter-lg' ? 
      <div className={`${props.className} flex bg-grey items-center justify-around`}>
          <p onClick={() => {dispatch(decrement())}}className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">-</p>
          <p className=" w-1/3 h-full flex justify-center items-center text-[13px] font-bold">{counter}</p>
          <p onClick={() => {dispatch(increment())}} className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">+</p>
      </div>
      :
      <div className={`${props.className} flex bg-grey items-center justify-around`}>
          <p onClick={() => {if(props.decrement !== undefined && props.totalDown !== undefined && props.price !== undefined){props.decrement(); props.totalDown(props.price)}}}className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">-</p>
          <p className=" w-1/3 h-full flex justify-center items-center text-[13px] font-bold">{props.counter}</p>
          <p onClick={() => {if(props.increment !== undefined && props.totalUp !== undefined && props.price !== undefined){props.increment(); props.totalUp(props.price)}}} className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">+</p>
      </div>}
   </>
  )
}

export default Counter