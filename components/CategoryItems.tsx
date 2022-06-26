import { StaticImageData } from 'next/image'
import React from 'react'
import Button from './Button'
import imaage from '../public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'

interface categoryItem{
    img: StaticImageData
    productName: string
    productDescript: string
    productNew: boolean
    slug: string
    category: string
}

const CategoryItems = (props: categoryItem) => {
    console.log(props.img)
  return (
    <div className="flex flex-col items-center px-6 gap-6 mb-[120px]">
        <img className='rounded-lg mb-2' src={props.img.src} alt="" />
        {props.productNew  && <p className="overlines">new product</p>}
        <h4 className="text-center px-14">{props.productName}</h4>
        <p className="text-center px-2">{props.productDescript}</p>
        <Button btn='btn-1' href={`/product-detail/${props.category}/${props.slug}`} >see product</Button>
    </div>
  )
}

export default CategoryItems