import React from 'react'

const SummaryTotals = (props: {className?:string, color?:string,  title: string, total: number}) => {
  return (
    <div className={`flex justify-between  ${props.className} `}>
        <p className={`uppercase opacity-70`}>{props.title}</p>
        <h6 className={props.color}>{`$${props.total}`}</h6>
    </div>
  )
}

export default SummaryTotals