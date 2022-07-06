import Link from 'next/link'
import React, { useState } from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutModal from '../components/CheckoutModal'
import ConfirmationModal from '../components/ConfirmationModal'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import data from '../data.json'


type cartObj = {
  img: {mobile: string, tablet: string, desktop: string},
  name: string,
  price: number,
  counter: number
}

const Checkout = () => {
  
  const itemData = data.filter(item => item.slug === 'xx99-mark-two-headphones')
  console.log(itemData)
  const [counter, setCounter] = useState(0)
  const [cart, setCart] = useState<[] | cartObj[]>([])
  

  const decrement = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) =>  {
    if(counter === 0){
      return 
    }
    
    return setCounter(prev => prev - 1 )
  }

  const increment = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => {
    setCounter(prev => prev + 1 )
  }

  const onAddToCart = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('added to cart')
    setCart([{img:itemData[0].image, name:itemData[0].name.replace(' Headphones','').replace('Mark', 'MK'), price: itemData[0].price, counter: counter}])
  }

  console.log(itemData[0].name)
  return (
    <div >
      <Header cart={cart}/>
      <div className="bg-grey2 px-6 ">
        <Link href={'#d'}><p className='pt-[106px] mb-6'>Go Back</p></Link>
        <CheckoutForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout