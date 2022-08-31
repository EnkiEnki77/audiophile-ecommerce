import React, { useState, useEffect, useRef } from 'react'
import headphones from '../public/assets/cart/image-xx59-headphones.jpg'
import Counter from './Counter'
import {useAppSelector} from '../hooks'

interface cartItem{
    
    price: number,
    name: string,
    image: {mobile:string, desktop: string, tablet: string},
    defaultCounter: number
}

type CounterProps = {
  checkout?: boolean
  price: number
  name: string
  img: {mobile:string, desktop: string, tablet: string}
  totalUp: (price: number) => void
  totalDown: (price: number) => void
  cartItem: cartItem[]
}

const SummaryItems = (props: CounterProps) => {

  

  const reduxCounter = useAppSelector(state => state.counter.value)

  const [counter, setCounter] = useState(reduxCounter) 

  const useEffectShouldRun = useRef(true)

  useEffect(() => {
    if(useEffectShouldRun.current){
      useEffectShouldRun.current = false
      console.log(props.price, counter)
      props.totalUp(props.price * counter )}
  },[])


  const incrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  const decrementCounter = () => {
    setCounter(prev => prev - 1)
  }

  return (
  <>
     {props.checkout ? <div className="flex">
          <img className='w-16 h-auto rounded-lg ' src={require(`../public${props.img.mobile.slice(1)}`).default.src} alt="" />
          <div className="flex  justify-between w-full pl-4 items-center">
              <div className="flex flex-col">
                  <p className='font-bold'>{props.name}</p>
                  <p className=''>{`$${props.price * counter}`}</p> 
              </div>  
              <Counter price={props.price} totalUp={props.totalUp} totalDown={props.totalDown} counter={counter} increment={incrementCounter} decrement={decrementCounter} className='counter-sm' />
          </div>
      </div>
      :
      <div className="flex">
          <img className='w-16 h-auto rounded-lg ' src={require(`../public${props.img.mobile.slice(1)}`).default.src} alt="" />
          <div className="flex  justify-between w-full pl-4 items-center">
              <div className="flex flex-col">
                  <h6 className=''>{props.name}</h6>
                  <p className=''>{`$${0}`}</p> 
              </div>  
              <p className='flex flex-col justify-end'>x1</p> 
          </div>
      </div>}
  </>
  )
}

export default SummaryItems