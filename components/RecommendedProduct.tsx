import React from 'react'
import Button from './Button'



const RecommendedProduct = (props: {name: string, slug: string, image: string}) => {
    const image = require(`../public${props.image.slice(1)}`)
    let category = ''
    

    if(props.slug.includes('headphones')){
        category = 'headphones'
    }else if(props.slug.includes('speaker')){
        category = 'speakers'
    }else{
        category = 'earphones'
    }

  return (
    <div className="flex flex-col gap-8 items-center mb-14">
        <img src={image.default.src} alt="" />
        <h5>{props.name}</h5>
        <Button btn='btn-1' href={`/product-detail/${category}/${props.slug}`}>see product</Button>
    </div>
  )
}

export default RecommendedProduct