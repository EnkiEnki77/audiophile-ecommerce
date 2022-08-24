import React from 'react'
import bestGear from '../public/assets/shared/mobile/image-best-gear.jpg'
import bestGearMd from '../public/assets/shared/tablet/image-best-gear.jpg'
import bestGearLg from '../public/assets/shared/desktop/image-best-gear.jpg'

const BestGear = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-10 lg:px-[165px] mb-[110px] lg:flex-row lg:gap-6 lg:mb-[200px]">
        <picture className="lg:order-2 lg:basis-1/2 lg:h-[588px] w-full">
          <source srcSet={bestGearLg.src} media="(min-width: 1024px)"/>
          <source srcSet={bestGearMd.src} media="(min-width: 768px)"/>
          <img className="  h-[300px] w-full rounded-lg mb-10 md:mb-16 lg:h-full lg:mb-0" src={bestGear.src} alt="" />
        </picture>
        <div className='lg:order-1 self-center basis-1/2 flex flex-col items-center lg:items-start'>
          <h4 className="lg:pr-10 mb-8 text-center lg:text-left md:text-[40px] max-w-lg md:mx-auto lg:mx-0">Bringing you the <span className="text-brown">best</span> audio gear</h4>
          <p className="lg:px-0 min-w-[353px] px-4 lg:pr-24 text-center lg:text-left max-w-xl md:mx-auto">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
    </div>
  )
}

export default BestGear