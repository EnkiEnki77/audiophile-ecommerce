import React from 'react'
import Button from './Button'



const RecommendedProduct = (props: {name: string, slug: string, image: {[k: string]: string}}) => {
   
    let category = ''
    

    if(props.slug.includes('headphones')){
        category = 'headphones'
    }else if(props.slug.includes('speaker')){
        category = 'speakers'
    }else{
        category = 'earphones'
    }

  return (
    <div className="flex flex-col gap-8 items-center mb-14 md:mb-0 md:w-1/3">
        <picture className='w-full'> 
            <source srcSet={require(`../public${props.image.desktop.slice(1)}`).default.src} media='(min-width: 1024px)'/>
            <source srcSet={require(`../public${props.image.tablet.slice(1)}`).default.src} media='(min-width: 768px)'/>
            <img className="md:max-h-[318px] w-full" src={require(`../public${props.image.mobile.slice(1)}`).default.src} alt="" />
        </picture>
        <h5>{props.name}</h5>
        <Button btn='btn-1' href={`/product-detail/${category}/${props.slug}`}>see product</Button>
    </div>
  )
}

export default RecommendedProduct