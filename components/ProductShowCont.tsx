import React from 'react'
import ProductShow from './ProductShow'
import zx9 from '../public/assets/home/mobile/image-speaker-zx9.png'
import zx7 from '../public/assets/home/mobile/image-speaker-zx7.jpg'
import yx1 from '../public/assets/home/mobile/image-earphones-yx1.jpg'

const ProductShowCont = () => {
    const showcase = [
        {img: zx9, path: '/category/speakers/zx9-speaker', id: "zx9 speaker"},
        {img: zx7, path: '/category/speakers/zx7-speaker', id: "zx7 speaker"},
        {img: yx1, path: '/category/earphones/yx1-earphones', id: "yx1 earphones"}
    ]
  return (
    <div className="px-6 flex flex-col gap-6 mb-[120px]">
        {showcase.map(item => <ProductShow img={item.img} path={item.path} id={item.id}/>)}
    </div>
  )
}

export default ProductShowCont