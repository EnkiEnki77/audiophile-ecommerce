import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center lg:pl-[165px] h-[600px] md:mb-14 md:h-[729px] bg-bannerBg md:bg-mdBannerBg lg:bg-lgBannerBg bg-cover bg-bottom pt-[90px]">
        <p className='overlines mb-4 text-center text-white opacity-50 max-w-[346px]'>new product</p>
        <h1 className='text-white mb-6 text-center lg:text-left text-4xl  md:text-[56px]  md:leading-[58px] md:tracking-[2px] max-w-[396px]'>XX99 Mark II HeadphoneS</h1>
        <p className='mb-7 md:mb-10 text-center lg:text-left lg:pl-0 text-white text-opacity-75 px-6  max-w-[396px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button className='md:mb-10' btn='btn-1' href='/product-detail/headphones/xx99-mark-two-headphones'>see product</Button>
    </div>
  )
}

export default Banner