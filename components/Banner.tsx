import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[510px] bg-bannerBg bg-cover bg-bottom">
        <p className='overlines mb-4 text-center text-white opacity-50'>new product</p>
        <h2 className='text-white mb-6 text-center text-4xl'>XX99 Mark II HeadphoneS</h2>
        <p className='mb-7 text-center text-white text-opacity-75 px-6'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button btn='btn-1' href='/category/headphones/XX99-Mark-II-HeadphoneS'>see product</Button>
    </div>
  )
}

export default Banner