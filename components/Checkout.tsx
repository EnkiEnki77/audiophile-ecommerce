import React from 'react'
import CheckoutInputs from './CheckoutInputs'

const Checkout = () => {
    const checkoutInputs = ['billing details', 'shipping info', 'payment details']
  return (
    <div className='p-6 bg-white rounded-lg flex flex-col gap-8'>
        <h4>checkout</h4>
        {checkoutInputs.map(item => <CheckoutInputs inputsTitle={item}/>)}
    </div>
  )
}

export default Checkout