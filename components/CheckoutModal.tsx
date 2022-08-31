import React, {useState, useEffect} from 'react'
import Button from './Button'
import SummaryItems from './SummaryItems'
import SummaryTotals from './SummaryTotals'
import {useAppSelector, useAppDispatch, parseCookies} from '../hooks'
import {remove} from '../features/cart'
import Cookie from 'js-cookie'
import { NextPage, NextPageContext } from 'next'
import http from "http"



interface Props {
  userAgent?: string;
}

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

const [totalPrice, setTotalPrice] = useState<number>(0)


const handleTotalUp = (price: number) => {
  if(totalPrice === 0){
    setTotalPrice(price)
    return
  }
  setTotalPrice((prevState:number):number => {return prevState + price})
}

const handleTotalDown = (price: number) => {
  setTotalPrice((prevState:number):number => {return prevState - price})
}

useEffect(() => {
  Cookie.set('cart', JSON.stringify(cartItem))
},[cartItem])

console.log(totalPrice)

  return (
    <div className="max-w-[327px] px-7 py-8 bg-white rounded-lg gap-6 flex flex-col pt-24">
        <div className="flex justify-between mb-2">
            <h6>Cart ({cartItem[0].name !== '' ? cartItem.length : 0})</h6>
            <p onClick={() => dispatch(remove())} className='underline cursor-pointer opacity-50'>Remove all</p>
        </div>
        {cartItem[0].name !== '' && cartItem.map((item )=> <SummaryItems cartItem={cartItem} totalUp={handleTotalUp} totalDown={handleTotalDown} price={item.price} name={item.name} img={item.image} checkout={true}/>)}
        {cartItem[0].name !== '' ? <SummaryTotals total={totalPrice} title="TOTAL"  className='mt-2'/> : <SummaryTotals total={0} title="TOTAL" className='mt-2'/>}
        <Button  btn='btn-1' href={'/checkout'}  className='w-full'>checkout</Button>
    </div>
  )
}

CheckoutModal.getInitialProps = async (req: Promise<> ) => {
   
  return {props}
}

export default CheckoutModal