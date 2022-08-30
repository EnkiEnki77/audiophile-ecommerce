import React, {useState, useEffect} from 'react'
import Button from './Button'
import SummaryItems from './SummaryItems'
import SummaryTotals from './SummaryTotals'
import {useAppSelector, useAppDispatch} from '../hooks'

import {remove} from '../features/cart'

type cartObj = {
  img: {mobile: string, tablet: string, desktop: string},
  name: string,
  price: number,
  counter: number
}

type CounterProps = {
  checkout?: boolean
  defaultCounter: number
  price: number
  name: string
  img: {mobile:string, desktop: string, tablet: string}
  total: (total: number) => void
  counter: number
}





console.log(useAppSelector)


const CheckoutModal = () => {

  const dispatch = useAppDispatch()
const cartItem = useAppSelector(state => state.cart.cartItem)
const counter = useAppSelector(state => state.counter.value)

console.log(cartItem)

  return (
    <div className="max-w-[327px] px-7 py-8 bg-white rounded-lg gap-6 flex flex-col pt-24">
        <div className="flex justify-between mb-2">
            <h6>Cart ({cartItem[0].name !== '' ? cartItem.length : 0})</h6>
            <p onClick={() => dispatch(remove())} className='underline cursor-pointer opacity-50'>Remove all</p>
        </div>
        {cartItem[0].name !== '' && cartItem.map((item )=> <SummaryItems price={item.price} name={item.name} img={item.image} checkout={true}/>)}
        {cartItem[0].name !== '' ? <SummaryTotals title="TOTAL"  className='mt-2'/> : <SummaryTotals title="TOTAL" className='mt-2'/>}
        <Button  btn='btn-1' href={'/checkout'}  className='w-full'>checkout</Button>
    </div>
  )
}

export default CheckoutModal