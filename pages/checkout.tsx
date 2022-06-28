import Link from 'next/link'
import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutModal from '../components/CheckoutModal'
import ConfirmationModal from '../components/ConfirmationModal'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'

const Checkout = () => {
  return (
    <div >
      <Header/>
      <div className="bg-grey2 px-6 ">
        <Link href={'#d'}><p className='pt-[106px] mb-6'>Go Back</p></Link>
        <CheckoutForm/>
        <CheckoutModal/>
        <ConfirmationModal/>
        <MobileMenu/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Checkout