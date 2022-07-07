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
    <div className="flex flex-col items-center px-6 md:px-10 gap-6 mb-[120px]">
        <picture>
          <source srcSet={require(`../public${props.img.desktop.slice(1)}`).default.src} media="(min-width: 1024px)"/>
          <source srcSet={require(`../public${props.img.tablet.slice(1)}`).default.src} media="(min-width: 768px)"/>
          <img className='md:mb-8 rounded-lg mb-2 md:mx-h-[355px]' src={require(`../public${props.img.mobile.slice(1)}`).default.src} alt="" />
        </picture>
        {props.productNew  && <p className="overlines">new product</p>}
        <h4 className="text-center px-14 md:text-[40px] md:w-[300px] md:px-0 md:mb-2">{props.productName}</h4>
        <p className="text-center px-2 md:px-20">{props.productDescript}</p>
        <Button btn='btn-1' href={`/product-detail/${props.category}/${props.slug}`} >see product</Button>
    </div>
  )
}

export default CategoryItems