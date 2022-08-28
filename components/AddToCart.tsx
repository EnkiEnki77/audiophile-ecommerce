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
    <div className="flex  gap-4 mb-[88px] md:px-0 md:mb-0">
        <Counter className="counter-lg" counter={props.counter} decrement={props.decrement} increment={props.increment}/>
        <Button onClick={props.onAddToCart} notLink={true} btn='btn-1'>Add to cart</Button>
    </div>
  )
}

export default AddToCart