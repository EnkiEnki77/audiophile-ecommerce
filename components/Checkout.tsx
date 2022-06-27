import React from 'react'
import CheckoutInputs from './CheckoutInputs'

const Checkout = () => {
    const checkoutInputs = ['billing details', 'shipping info', 'payment details']
  return (
    <div>
        <h4>checkout</h4>
        {checkoutInputs.map(item => <CheckoutInputs inputsTitle={item}/>)}
    </div>
  )
}

export default Checkout