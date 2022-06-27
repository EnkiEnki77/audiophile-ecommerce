import Link from 'next/link'
import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Checkout = () => {
  return (
    <div >
      <Header/>
      <div className="bg-grey2 px-6">
        <Link href={'#d'}><p className='pt-[106px]'>Go Back</p></Link>
        <CheckoutForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout