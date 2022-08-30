import React from 'react'
import Button from './Button'
import Counter from './Counter'
import {useAppDispatch, useAppSelector} from '../hooks'
import {addToCart} from '../features/cart'

interface productProps{
  image: {[key: string]: string}
  new: boolean
  name: string
  description: string
  price: number
}

const AddToCart = (props:productProps) => {

  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart.cartItem)
  const counter = useAppSelector(state => state.counter.value)
  console.log(cart)

  return (
    <div className="flex  gap-4 mb-[88px] md:px-0 md:mb-0">
        <Counter className="counter-lg" />
        <Button onClick={() => {dispatch(addToCart({image: props.image, new: props.new, name: props.name, description: props.description, price: props.price, counter: counter}))}} notLink={true} btn='btn-1'>Add to cart</Button>
    </div>
  )
}

export default AddToCart