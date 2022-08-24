import { StaticImageData } from 'next/image'
import React from 'react'
import Button from './Button'
import imaage from '../public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'

interface categoryItem{
    img: {mobile: string, tablet: string, desktop: string}
    productName: string
    productDescript: string
    productNew: boolean
    slug: string
    category: string
}

const CategoryItems = (props: categoryItem) => {
    console.log(props.img)
  return (
    <div className="flex flex-col lg:flex-row items-center px-6 md:px-10 gap-6 lg:gap-[125px] mb-[120px] lg:px-[165px] group">
        <picture className="lg:group-even:order-2">
          <source srcSet={require(`../public${props.img.desktop.slice(1)}`).default.src} media="(min-width: 1024px)"/>
          <source srcSet={require(`../public${props.img.tablet.slice(1)}`).default.src} media="(min-width: 768px)"/>
          <img className='lg:h-[560px] lg:min-w-[540px] md:mb-8 rounded-lg mb-2 md:mx-h-[355px]' src={require(`../public${props.img.mobile.slice(1)}`).default.src} alt="" />
        </picture>
        
        <div className="flex flex-col gap-6 items-center lg:items-start lg:gap-4 lg:group-even:order-1">
          {props.productNew  && <p className="overlines">new product</p>}
          <h4 className="  lg:mb-4 text-center lg:text-left px-14 md:text-[40px] md:w-[300px] md:px-0 md:mb-2">{props.productName}</h4>
          <p className=" px-2 lg:mb-6 text-center lg:text-left  md:px-20 lg:px-0">{props.productDescript}</p>
          <Button btn='btn-1' href={`/product-detail/${props.category}/${props.slug}`} >see product</Button>
        </div>
    </div>
  )
}

export default CategoryItems