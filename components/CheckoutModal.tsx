import React from 'react'
import Button from './Button'
import SummaryItems from './SummaryItems'
import SummaryTotals from './SummaryTotals'

const CheckoutModal = () => {
  return (
    <div className="max-w-[327px] px-7 py-8 bg-white rounded-lg gap-6 flex flex-col">
        <div className="flex justify-between mb-2">
            <h6>Cart (3)</h6>
            <p className='underline cursor-pointer opacity-50'>Remove all</p>
        </div>
        <SummaryItems checkout={true}/>
        <SummaryItems checkout={true}/>
        <SummaryItems checkout={true}/>
        <SummaryTotals title="TOTAL" price="$5,000" className='mt-2'/>
        <Button btn='btn-1' notLink={true} className='w-full'>checkout</Button>
    </div>
  )
}

export default CheckoutModal