import React from 'react'
import RecommendedProduct from './RecommendedProduct'

type RecommendedProductProps = {
    others: {slug: string, name: string, image: {[k: string]: string}}[]
}

const YouMayAlsoLike = (props: RecommendedProductProps) => {
  return (
    <div className="px-6 md:px-10 mb-[120px]">
        <h5 className="text-center mb-10">you may also like</h5>
        <div className="md:flex md:gap-3">{props.others.map(item => <RecommendedProduct image={item.image} name={item.name} slug={item.slug}/>)}</div>
    </div>
  )
}

export default YouMayAlsoLike