import Link from 'next/link'
import React from 'react'
import arrow from '../public/assets/shared/desktop/icon-arrow-right.svg'

interface buttonProps{
  btn: 'btn-1' | 'btn-2' | 'btn-3', 
  children: React.ReactNode, 
  href?: string,
  className?: string
  notLink?: boolean
}

const Button = (props: buttonProps) => {
  return (
    <>
      {!props.notLink ? 
      <Link href={props.href!}>
        {props.btn === 'btn-3' ? 
          <div className={`flex w-[56px] h-[18px] justify-between items-center group cursor-pointer ${props.className}`}>
            <p className='sub-title leading-[18px] text-black group-hover:text-brown'>shop</p>
            <img src={arrow.src} alt="" className='object-contain'/>
          </div> :  
          <button className={`${props.btn} ${props.className}`}>{props.children}</button>
        } 
      </Link>
        :
       <>
          {props.btn === 'btn-3' ? 
            <div className={`flex w-[56px] h-[18px] justify-between items-center group cursor-pointer ${props.className}`}>
              <p className='sub-title leading-[18px] text-black group-hover:text-brown'>shop</p>
              <img src={arrow.src} alt="" className='object-contain'/>
            </div> :  
            <button className={`${props.btn} ${props.className}`}>{props.children}</button>
          } 
       </>
        }
    </>
  )
}

export default Button