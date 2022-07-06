import React from 'react'
import bestGear from '../public/assets/shared/mobile/image-best-gear.jpg'
import bestGearMd from '../public/assets/shared/tablet/image-best-gear.jpg'
import bestGearLg from '../public/assets/shared/desktop/image-best-gear.jpg'

const BestGear = () => {
  return (
    <div className="px-6 md:px-10 mb-[110px]">
        <picture>
          <source srcSet={bestGearLg.src} media="(min-width: 1024px)"/>
          <source srcSet={bestGearMd.src} media="(min-width: 768px)"/>
          <img className=" h-[300px] md:w-full rounded-lg mb-10 md:mb-16" src={bestGear.src} alt="" />
        </picture>
        <h4 className="mb-8 text-center md:text-[40px] max-w-lg md:mx-auto">Bringing you the <span className="text-brown">best</span> audio gear</h4>
        <p className="text-center max-w-xl md:mx-auto">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  )
}

export default BestGear