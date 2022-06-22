import Link from 'next/link'
import React from 'react'
import arrow from '../public/assets/shared/desktop/icon-arrow-right.svg'

interface buttonProps{
  btn: 'btn-1' | 'btn-2' | 'btn-3', 
  children: React.ReactNode, 
  href: string
}

const Button = (props: buttonProps) => {
  console.log(arrow)
  return (
    <Link href={props.href}>
      {props.btn === 'btn-3' ? 
        <div className='flex w-[56px] h-[18px] justify-between items-center group cursor-pointer'>
          <p className='sub-title leading-[18px] text-black group-hover:text-brown'>shop</p>
          <img src={arrow.src} alt="" className='object-contain'/>
        </div> :  
        <button className={props.btn}>{props.children}</button>
      } 
    </Link>
  )
}

export default Button