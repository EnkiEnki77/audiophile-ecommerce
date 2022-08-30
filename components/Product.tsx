import { StaticImageData } from 'next/image'
import React from 'react'
import AddToCart from './AddToCart'

interface productProps{
    image: {[key: string]: string}
    new: boolean
    name: string
    description: string
    price: number
}

const Product = (props: productProps) => {
    let price = props.price.toString()

    if(price.length > 3){
        price = price.slice(0, 1) + ',' + price.slice(1)
    }

    console.log(price)

  return (
    <div className="px-6 lg:px-[165px] md:px-10 flex flex-col md:flex-row gap-6 md:gap-[70px] lg:gap-[150px] mb-6 mt-6 lg:mt-14 md:mb-[120px] lg:mb-[160px]">
        <picture>
          <source srcSet={require(`../public${props.image.desktop.slice(1)}`).default.src} media='(min-width: 1024px)'/>
          <source srcSet={require(`../public${props.image.tablet.slice(1)}`).default.src} media='(min-width: 768px)' />
          <img className="min-w-[281px] lg:min-w-[36rem] lg:max-h-[36rem] first-letter:mb-2 rounded-lg" src={require(`../public${props.image.mobile.slice(1)}`).default.src} alt="" />
        </picture>
        <div className='flex flex-col gap-4 justify-center'>
          {props.new && <p className="overlines ">new product</p>}
          <h2 className=" pr-24 md:mb-4">{props.name}</h2>
          <p className="opacity-75 md:mb-4 md:pr-5">{props.description}</p>
          <h6 className=" mb-2 md:mb-4 lg:mb-8">{`$${price}`}</h6>
          <AddToCart price={props.price} new={props.new} name={props.name} description={props.description} image={props.image}/>
        </div>
    </div>
  )
}

export default Product