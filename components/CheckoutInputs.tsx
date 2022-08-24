import React from 'react'
import FormElement from './FormElement'

const CheckoutInputs = (props: {inputsTitle: string}) => {
  const formElements = [
    {label:"Name", inputType:"text", id:"name", placeholder:"Enter your name..."},
    {label:"Email Address", inputType:"email", id:"email", placeholder:"Enter your email..."},
    {label:"Phone Number", inputType:"text", id:"phone-number", placeholder:"Enter your phone number..."}
  ]

  const formElements2 = [
    {label:"Your Address", inputType:"text", id:"address", placeholder:"Enter your address..."},
    {label:"ZIP Code", inputType:"number", id:"zip", placeholder:"Enter your zip code..."},
    {label:"City", inputType:"text", id:"city", placeholder:"Enter your city..."},
    {label:"Country", inputType:"text", id:"country", placeholder:"Enter your country..."},
  ]

  const formElements3= [
    {label:"Your Address", inputType:"radio", id:"address", placeholder:"Enter your address..."},
    {label:"Cash on Delivery", inputType:"radio", id:"zip", placeholder:"Enter your zip code..."},
  ]

  const formElements4 = [
    {label:"e-Money number", inputType:"number", id:"e-money-number", placeholder:"Enter your e-Money number..."},
    {label:"e-Money PIN", inputType:"number", id:"e-money-pin", placeholder:"Enter your e-Money PIN..."},
  ]

  return (
    <div >
        <p className="sub-title mb-4">{props.inputsTitle}</p>
        
            {props.inputsTitle === 'billing details' && 
            <div className=" flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-4">
              {formElements.map(item => <FormElement className='md:basis-[calc(50%-0.5rem)]' label={item.label} inputType={item.inputType} id={item.id} placeholder={item.placeholder}/>)}
            </div>
            
            ||
            props.inputsTitle === 'shipping info' && 
            <div className=" flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-4">
              {formElements2.map(item => <FormElement className='md:basis-[calc(50%-0.5rem)] md:first:basis-[calc(100%)]' label={item.label} inputType={item.inputType} id={item.id} placeholder={item.placeholder}/>)}
            </div>
            
            ||
            props.inputsTitle === 'payment details' && 
            <div className=" flex flex-col gap-6 ">
              <div id='payment-method' className='flex flex-col gap-4 md:flex-row md:flex-wrap'>
                  <label className='font-bold text-[12px] leading-4 tracking-tight md:basis-[calc(50%-0.5rem)]' htmlFor='payment-method'>Payment Method</label>
                  {formElements3.map(item => <FormElement className='md:basis-[calc(50%-0.5rem)] md:last:ml-auto' label={item.label} inputType={item.inputType} id={item.id} placeholder={item.placeholder}/>)}
              </div>
              <div className='md:flex md:gap-4'>{formElements4.map(item => <FormElement className='md:basis-[calc(50%-0.5rem)] ' label={item.label} inputType={item.inputType} id={item.id} placeholder={item.placeholder}/>)}</div>
            </div>
            
            }
        
    </div>
  )
}

export default CheckoutInputs