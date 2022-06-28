import React from 'react'
import headphones from '../public/assets/cart/image-xx59-headphones.jpg'
import Counter from './Counter'

const SummaryItems = (props: {checkout?: boolean}) => {
  return (
    <div className="flex">
        <img className='w-16 h-auto rounded-lg ' src={headphones.src} alt="" />
        <div className="flex  justify-between w-full pl-4 items-center">
            <div className="flex flex-col">
                <h6 className=''>XX59</h6>
                <p className=''>$2999</p> 
            </div>  
            {props.checkout ? <Counter/> : <p className='flex flex-col justify-end'>x1</p> }
        </div>
    </div>
  )
}

export default SummaryItems