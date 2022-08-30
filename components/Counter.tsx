import React, { useState, MouseEvent } from 'react'
import {useAppDispatch, useAppSelector} from '../hooks'
import {increment, decrement} from '../features/counter'

type CounterProps = {
  className:'counter-sm' | 'counter-lg'
}

const Counter = (props: CounterProps) => {

  const counter = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className={`${props.className} flex bg-grey items-center justify-around`}>
        <p onClick={() => {dispatch(decrement())}}className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">-</p>
        <p className=" w-1/3 h-full flex justify-center items-center text-[13px] font-bold">{counter}</p>
        <p onClick={() => {dispatch(increment())}} className="w-1/3 h-full hover:text-brown cursor-pointer flex justify-center items-center">+</p>
    </div>
  )
}

export default Counter