import React from 'react'
import bestGear from '../public/assets/shared/mobile/image-best-gear.jpg'

const BestGear = () => {
  return (
    <div className="px-6 ">
        <img className=" h-[300px] rounded-lg mb-10" src={bestGear.src} alt="" />
        <h4 className="mb-8 text-center">Bringing you the <span className="text-brown">best</span> audio gear</h4>
        <p className="text-center">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
  )
}

export default BestGear