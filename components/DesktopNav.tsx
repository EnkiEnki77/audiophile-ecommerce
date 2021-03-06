import Link from 'next/link'
import React from 'react'

type Props = {
    className?: string
}

const DesktopNav = (props: Props) => {
    const nav = [{name:'home', path:'/'}, 
                {name:'headphones', path:'/category/headphones', id: 1},
                {name:'speakers', path:'/category/speakers', id: 2},
                {name:'earphones', path:'/category/earphones', id: 3},
                ]
  return (
    <div className={`${props.className} md:flex  md:gap-8 md:basis-[45%]`} >{nav.map((item)=> <Link key={item.id} href={item.path}><p className=" cursor-pointer hover:text-brown sub-title text-white tracking-[2px] text-center mb-4 md:mb-0">{item.name}</p></Link>)}</div>
  )
}

export default DesktopNav