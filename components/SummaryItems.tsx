import React, { useState } from 'react'
import headphones from '../public/assets/cart/image-xx59-headphones.jpg'
import Counter from './Counter'

type CounterProps = {
  checkout?: boolean
  defaultCounter: number
  price: number
  name: string
  img: {mobile:string, desktop: string, tablet: string}
}

const SummaryItems = (props: CounterProps) => {
  const [counter, setCounter] = useState(props.defaultCounter)

  const decrement = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) =>  {
    if(counter === 0){
      return 
    }
    
    return setCounter(prev => prev - 1 )
  }

  const increment = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => {
    setCounter(prev => prev + 1 )
  }

  let newPrice = props.price * counter

  console.log(newPrice)

  let price = newPrice.toString()

    if(price.length > 5){
        price = price.slice(0, 3) + ',' + price.slice(3)
    }else if(price.length > 4){
        price = price.slice(0, 2) + ',' + price.slice(2)
    }else if(price.length > 3){
        price = price.slice(0, 1) + ',' + price.slice(1)
    }

  return (
  <>
     {props.checkout ? <div className="flex">
          <img className='w-16 h-auto rounded-lg ' src={require(`../public${props.img.mobile.slice(1)}`).default.src} alt="" />
          <div className="flex  justify-between w-full pl-4 items-center">
              <div className="flex flex-col">
                  <p className='font-bold'>{props.name}</p>
                  <p className=''>{`$${price}`}</p> 
              </div>  
              <Counter className='counter-sm'  counter={counter} decrement={decrement} increment={increment}/>
          </div>
      </div>
      :
      <div className="flex">
          <img className='w-16 h-auto rounded-lg ' src={require(`../public${props.img.mobile.slice(1)}`).default.src} alt="" />
          <div className="flex  justify-between w-full pl-4 items-center">
              <div className="flex flex-col">
                  <h6 className=''>{props.name}</h6>
                  <p className=''>{`$${price}`}</p> 
              </div>  
              <p className='flex flex-col justify-end'>x1</p> 
          </div>
      </div>}
  </>
  )
}

export default SummaryItems