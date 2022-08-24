import React from 'react'
import RecommendedProduct from './RecommendedProduct'

type RecommendedProductProps = {
    others: {slug: string, name: string, image: {[k: string]: string}}[]
}

const YouMayAlsoLike = (props: RecommendedProductProps) => {
  return (
    <div className="px-6 md:px-10 lg:px-[165px] mb-[120px] lg:mb-[160px]">
        <h3 className="text-center mb-10">you may also like</h3>
        <div className="md:flex md:gap-3 lg:gap-[30px]">{props.others.map(item => <RecommendedProduct image={item.image} name={item.name} slug={item.slug}/>)}</div>
    </div>
  )
}

export default YouMayAlsoLike