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

type CounterProps = {
  checkout?: boolean
  defaultCounter: number
  price: number
  name: string
  img: {mobile:string, desktop: string, tablet: string}
  total: (total: number) => void
  counter: number
}

type HeaderProps = {
  cart: cartObj[]
}



const CheckoutModal = (props:HeaderProps) => {
  const [cartItem, setCartItem] = useState([...props.cart])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const item = sessionStorage.getItem('cart')

    if(item != null){setCartItem(JSON.parse(item))}
  }, [])

  useEffect(() =>{
    sessionStorage.setItem('cart', JSON.stringify(cartItem))
  }, [cartItem])

  console.log(localStorage.item)
  let cartItems = [...props.cart]

  const handleTotal = (total: number) => {
    setTotalPrice(total)
  }



  console.log(totalPrice)

  const Cart = (e:React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    console.log(cartItems)
  }

  const RemoveAll = (e:React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => {
    setCartItem([])
  }

  const cartPrices = [...cartItem.map((item) => item.price)]

  const cartTotal = cartPrices.reduce((a, b) => { return a + b}, 0)

  console.log(cartItem)

  


  return (
    <div className="max-w-[327px] px-7 py-8 bg-white rounded-lg gap-6 flex flex-col pt-24">
        <div className="flex justify-between mb-2">
            <h6>Cart ({cartItem.length})</h6>
            <p onClick={RemoveAll} className='underline cursor-pointer opacity-50'>Remove all</p>
        </div>
        {cartItem.length > 0 && cartItem.map((item )=> <SummaryItems total={handleTotal} defaultCounter={item.counter} price={item.price} name={item.name} img={item.img} checkout={true}/>)}
        {cartItem.length > 0 ? <SummaryTotals title="TOTAL" price={cartTotal} className='mt-2'/> : <SummaryTotals title="TOTAL" price={0} className='mt-2'/>}
        <Button onClick={Cart}  btn='btn-1' href={'/checkout'}  className='w-full'>checkout</Button>
    </div>
  )
}

export default CheckoutModal