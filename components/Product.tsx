import { StaticImageData } from 'next/image'
import React from 'react'

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
    <div className="px-6 flex flex-col gap-6 mb-6 mt-6">
        <img className="mb-2 rounded-lg" src={require(`../public${props.image.mobile.slice(1)}`).default.src} alt="" />
        {props.new && <p className="overlines">new product</p>}
        <h4>{props.name}</h4>
        <p className="opacity-75">{props.description}</p>
        <h6>{`$${price}`}</h6>
    </div>
  )
}

export default Product