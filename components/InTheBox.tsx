import React from 'react'

const InTheBox = (props: {includes: {quantity: number, item: string}[]}) => {
  return (
    <div className="px-6 mb-[88px]">
        <h5 className="mb-6">In The Box</h5>
        {props.includes.map((item, i) => {return <div key={i} className="flex gap-[21px]"><p className='sub-title normal-case text-[15px]'>{`${item.quantity}x`}</p><p className='opacity-75'>{item.item}</p></div>})}
    </div>
  )
}

export default InTheBox