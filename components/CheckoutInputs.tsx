import React from 'react'
import FormElement from './FormElement'

const CheckoutInputs = (props: {inputsTitle: string}) => {
  return (
    <div >
        <p className="sub-title mb-4">{props.inputsTitle}</p>
        <div className="flex flex-col gap-6">
            {props.inputsTitle === 'billing details' && 
            [<FormElement label='Name' inputType="text" id="name" placeholder="Enter your name..."/>,
            <FormElement label='Email Address' inputType="email" id="email" placeholder="Enter your email..."/>,
            <FormElement label='Phone Number' inputType="text" id="phone-number" placeholder="Enter your phone number..."/>,
            ]
            ||
            props.inputsTitle === 'shipping info' && 
            [<FormElement label='Your Address' inputType="text" id="address" placeholder="Enter your address..."/>,
            <FormElement label='ZIP Code' inputType="number" id="zip" placeholder="Enter your zip code..."/>,
            <FormElement label='City' inputType="text" id="city" placeholder="Enter your city..."/>,
            <FormElement label='Country' inputType="text" id="country" placeholder="Enter your phone country..."/>
            ]
            ||
            props.inputsTitle === 'payment details' && 
            [
            <div id='payment-method' className='flex flex-col gap-4'>
                <label className='font-bold text-[12px] leading-4 tracking-tight ' htmlFor='payment-method'>Payment Method</label>
                <FormElement label='e-Money' inputType="radio" id="address" placeholder="Enter your address..."/>
                <FormElement label='Cash on Delivery' inputType="radio" id="zip" placeholder="Enter your zip code..."/>
            </div>,
            <FormElement label='e-Money number' inputType="number" id="e-money-number" placeholder="Enter your e-Money number..."/>,
            <FormElement label='e-Money PIN' inputType="number" id="e-money-pin" placeholder="Enter your e-Money PIN..."/>
            ]
            }
        </div>
    </div>
  )
}

export default CheckoutInputs