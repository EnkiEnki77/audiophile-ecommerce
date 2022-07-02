import React, {useState} from 'react'
import Button from './Button'
import SummaryItems from './SummaryItems'
import SummaryTotals from './SummaryTotals'

type cartObj = {
  img: {mobile: string, tablet: string, desktop: string},
  name: string,
  price: number,
  counter: number
}

type HeaderProps = {
  cart: cartObj[]
}

const CheckoutModal = (props:HeaderProps) => {

  console.log(props.cart)

  const cartItems:cartObj[] = [...props.cart]

  const Cart = (e:React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(...props.cart)
  }
  
  return (
    <div className="max-w-[327px] px-7 py-8 bg-white rounded-lg gap-6 flex flex-col">
        <div className="flex justify-between mb-2">
            <h6>Cart (3)</h6>
            <p className='underline cursor-pointer opacity-50'>Remove all</p>
        </div>
        {cartItems.map(item => <SummaryItems defaultCounter={item.counter} price={item.price} name={item.name} img={item.img} checkout={true}/>)}
        <SummaryTotals title="TOTAL" price="$5,000" className='mt-2'/>
        <Button onClick={Cart}  btn='btn-1' notLink={true} className='w-full'>checkout</Button>
    </div>
  )
}

export default CheckoutModal