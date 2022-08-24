import React from 'react'
import Checkout from './Checkout'
import Summary from './Summary'

const CheckoutForm = () => {
  return (
    <form className=" flex flex-col gap-8 lg:flex-row">
        <Checkout/>
        <Summary/>
    </form>
  )
}

export default CheckoutForm