import React from 'react'
import ProductShow from './ProductShow'
import zx9 from '../public/assets/home/mobile/image-speaker-zx9.png'

import zx7 from '../public/assets/home/mobile/image-speaker-zx7.jpg'
import yx1 from '../public/assets/home/mobile/image-earphones-yx1.jpg'


const ProductShowCont = () => {
    const showcase = [
        {img: zx9, path: '/product-detail/speakers/zx9-speaker', id: "zx9 speaker"},
        {img: zx7, path: '/product-detail/speakers/zx7-speaker', id: "zx7 speaker"},
        {img: yx1, path: '/product-detail/earphones/yx1-wireless-earphones', id: "yx1 earphones"}
    ]
  return (
    <div className="px-6 md:px-10 lg:px-[165px] flex flex-col gap-6 lg:gap-12 mb-[120px]">
        {showcase.map(item => <ProductShow key={item.id} img={item.img} path={item.path} id={item.id}/>)}
    </div>
  )
}

export default ProductShowCont