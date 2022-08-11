import { StaticImageData } from 'next/image'
import React from 'react'
import AddToCart from './AddToCart'

interface productProps{
    image: {[key: string]: string}
    new: boolean
    name: string
    description: string
    price: number
    counter: number
    decrement: (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => void
    increment: (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => void
    onAddToCart:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Product = (props: productProps) => {
    let price = props.price.toString()

    if(price.length > 3){
        price = price.slice(0, 1) + ',' + price.slice(1)
    }

    console.log(price)

  return (
    <div className="px-6 lg:px-[165px] md:px-10 flex flex-col md:flex-row gap-6 md:gap-[70px] mb-6 mt-6 lg:mt-14 md:mb-[120px]">
        <picture>
          <source srcSet={require(`../public${props.image.desktop.slice(1)}`).default.src} media='(min-width: 1024px)'/>
          <source srcSet={require(`../public${props.image.tablet.slice(1)}`).default.src} media='(min-width: 768px)' />
          <img className="min-w-[281px] first-letter:mb-2 rounded-lg" src={require(`../public${props.image.mobile.slice(1)}`).default.src} alt="" />
        </picture>
        <div className='md:flex md:flex-col md:gap-4 justify-center'>
          {props.new && <p className="overlines md:mb-4">new product</p>}
          <h4 className=" md:mb-4">{props.name}</h4>
          <p className="opacity-75 md:mb-4 md:pr-5">{props.description}</p>
          <h6 className=" md:mb-4">{`$${price}`}</h6>
          <AddToCart counter={props.counter} decrement={props.decrement} increment={props.increment} onAddToCart={props.onAddToCart}/>
        </div>
    </div>
  )
}

export default Product