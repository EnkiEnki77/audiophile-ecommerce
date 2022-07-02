import React from 'react'
import Button from './Button'
import Counter from './Counter'

type AddToCartrProps = {
  counter: number, 
  decrement: (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => void
  increment: (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => void
  onAddToCart:  (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const AddToCart = (props: AddToCartrProps) => {

  return (
    <div className="flex px-6 gap-4 mb-[88px]">
        <Counter counter={props.counter} decrement={props.decrement} increment={props.increment}/>
        <Button onClick={props.onAddToCart} notLink={true} btn='btn-1'>Add to cart</Button>
    </div>
  )
}

export default AddToCart