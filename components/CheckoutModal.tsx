import React, {useState, useEffect} from 'react'
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
  // const [cartItem, setCartItem] = useState<[] | cartObj[]>([])

  // useEffect(() =>{
  //   setCartItem(props.cart)
  // }, [props.cart[0].counter])

  // console.log(props.cart[0].counter)
  let cartItems = [...props.cart]

  const Cart = (e:React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(cartItems)
  }

  const RemoveAll = (e:React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => {
    cartItems.pop()
  }

  

  return (
    <div className="max-w-[327px] px-7 py-8 bg-white rounded-lg gap-6 flex flex-col pt-24">
        <div className="flex justify-between mb-2">
            <h6>Cart ({cartItems.length})</h6>
            <p onClick={RemoveAll} className='underline cursor-pointer opacity-50'>Remove all</p>
        </div>
        {cartItems.map(item => <SummaryItems defaultCounter={item.counter} price={item.price} name={item.name} img={item.img} checkout={true}/>)}
        <SummaryTotals title="TOTAL" price={cartItems[0].price.toString()} className='mt-2'/>
        <Button onClick={Cart}  btn='btn-1' href={'/checkout'}  className='w-full'>checkout</Button>
    </div>
  )
}

export default CheckoutModal