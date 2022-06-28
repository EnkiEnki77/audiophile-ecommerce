import React from 'react'
import Button from './Button'
import SummaryItems from './SummaryItems'
import SummaryTotals from './SummaryTotals'
import check from '../public/assets/Path 4.png'


const ConfirmationModal = () => {
    return (
        <div className="max-w-[327px] p-8 bg-white rounded-lg gap-6 flex flex-col">
            <div className=" w-16 h-16 rounded-full flex items-center justify-center bg-brown"><img src={check.src} alt="" /></div>
            <h4>THANK YOU FOR YOUR ORDER</h4>
            <p className='opacity-75'>You will receive an email confirmation shortly.</p>
            <div className="rounded-lg overflow-hidden">
                <div className="bg-grey p-6 flex flex-col gap-4">
                    <SummaryItems />
                    <hr className="border-black/10"/>
                    <p className='text-center opacity-75 text-xs'>and 2 other item(s)</p>
                </div>
                <div className="bg-black px-6 py-3 flex flex-col justify-center gap-2">
                    <SummaryTotals title="Grand Total" color='text-white' price="$5,000" className='mt-2 flex-col gap-2'/>
                </div>
            </div>
            <Button btn='btn-1' notLink={true} className='w-full'>back to home</Button>
        </div>
      )
}

export default ConfirmationModal