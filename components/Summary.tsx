import React from 'react'
import Button from './Button'
import SummaryItems from './SummaryItems'
import SummaryTotals from './SummaryTotals'

const Summary = () => {
  return (
    <div className="p-6 bg-white rounded-lg mb-[97px] max-h-[612px] lg:w-1/3">
      <h6 className="mb-8">Summary</h6>
      <div className="flex flex-col gap-6 mb-8">
        <SummaryItems defaultCounter={0} price={1000} name='cunt' img={{mobile:'./assets/cart/image-zx9-speaker.jpg', tablet:'./assets/cart/image-zx9-speaker.jpg', desktop:'./assets/cart/image-zx9-speaker.jpg',}}/>
        <SummaryItems defaultCounter={0} price={1000} name='cunt' img={{mobile:'./assets/cart/image-zx9-speaker.jpg', tablet:'./assets/cart/image-zx9-speaker.jpg', desktop:'./assets/cart/image-zx9-speaker.jpg',}}/>
        <SummaryItems defaultCounter={0} price={1000} name='cunt' img={{mobile:'./assets/cart/image-zx9-speaker.jpg', tablet:'./assets/cart/image-zx9-speaker.jpg', desktop:'./assets/cart/image-zx9-speaker.jpg',}}/>
      </div>
      <div className="flex flex-col gap-2">
        <SummaryTotals title="Total" price="$5,300"/>
        <SummaryTotals title="shipping" price="$5,300"/>
        <SummaryTotals className="mb-[24px]"  title="vat (included)" price="$5,300" />
      </div>
      <SummaryTotals title=" Grand Total" price="$5,300" color="text-brown" className=''/>
      <Button btn='btn-1' notLink={true} className='w-full mt-8'>continue &amp; pay</Button>
    </div>
  )
}

export default Summary