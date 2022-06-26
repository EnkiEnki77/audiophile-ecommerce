import React from 'react'
import RecommendedProduct from './RecommendedProduct'

interface RecommendedProductProps{
    others: {slug: string, name: string, image: {[k: string]: string}}[]
}

const YouMayAlsoLike = (props: RecommendedProductProps) => {
  return (
    <div className="px-6 mb-[120px]">
        <h5 className="text-center mb-10">you may also like</h5>
        {props.others.map(item => <RecommendedProduct image={item.image.mobile} name={item.name} slug={item.slug}/>)}
    </div>
  )
}

export default YouMayAlsoLike