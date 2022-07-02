import React, { useState } from 'react'
import headphones from '../public/assets/cart/image-xx59-headphones.jpg'
import Counter from './Counter'

type CounterProps = {
  checkout?: boolean
  defaultCounter: number
}

const SummaryItems = (props: CounterProps) => {
  const [counter, setCounter] = useState(0)

  const decrement = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) =>  {
    if(counter === 0){
      return 
    }
    
    return setCounter(prev => prev - 1 )
  }

  const increment = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => {
    setCounter(prev => prev + 1 )
  }

  return (
    <div className="flex">
        <img className='w-16 h-auto rounded-lg ' src={headphones.src} alt="" />
        <div className="flex  justify-between w-full pl-4 items-center">
            <div className="flex flex-col">
                <h6 className=''>XX59</h6>
                <p className=''>$2999</p> 
            </div>  
            {props.checkout ? <Counter defaultCounter={props.defaultCounter}  counter={counter} decrement={decrement} increment={increment}/> : <p className='flex flex-col justify-end'>x1</p> }
        </div>
    </div>
  )
}

export default SummaryItems