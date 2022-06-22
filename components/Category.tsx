import { StaticImageData } from 'next/image'
import React from 'react'
import Button from './Button'


interface categoryProps{
    img: StaticImageData
    category: string,
    href: string
}

const Category = (props: categoryProps) => {
   
  return (
    <div className="relative h-[217px] flex flex-col justify-end items-center">
        <img className='w-auto h-[134px] absolute top-0  ' src={props.img.src} alt="" />
        <div className='w-full h-[165px] bg-grey flex flex-col  justify-end items-center'>
            <h6 className='mb-[17px]'>{props.category}</h6>
            <Button className='mb-[22px]' btn='btn-3' href={props.href}>Shop</Button>
        </div>
    </div>
  )
}

export default Category