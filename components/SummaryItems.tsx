import React from 'react'
import headphones from '../public/assets/cart/image-xx59-headphones.jpg'

const SummaryItems = () => {
  return (
    <div className="flex">
        <img className='w-16 h-auto rounded-lg ' src={headphones.src} alt="" />
        <div className="flex flex-wrap justify-between w-full pl-4">
            <h6 className='flex flex-col justify-end'>XX59</h6>
            <p className='flex flex-col justify-end'>x1</p>
            <p className='w-40'>$2999</p>
            
        </div>
    </div>
  )
}

export default SummaryItems