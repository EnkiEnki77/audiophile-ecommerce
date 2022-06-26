import React from 'react'
import Button from './Button'
import Counter from './Counter'

const AddToCart = () => {
  return (
    <div className="flex px-6 gap-4 mb-[88px]">
        <Counter/>
        <Button notLink={true} btn='btn-1'>Add to cart</Button>
    </div>
  )
}

export default AddToCart