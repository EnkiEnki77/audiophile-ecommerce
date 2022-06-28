import React from 'react'

const SummaryTotals = (props: {className?:string, color?:string, title: string, price: string}) => {
  return (
    <div className={`flex justify-between mb-2 ${props.className} `}>
        <p className="uppercase opacity-75">{props.title}</p>
        <h6 className={props.color}>{props.price}</h6>
    </div>
  )
}

export default SummaryTotals