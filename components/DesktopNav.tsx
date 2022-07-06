import Link from 'next/link'
import React from 'react'

type Props = {}

const DesktopNav = (props: Props) => {
    const nav = [{name:'home', path:'/'}, 
                {name:'headphones', path:'/category/headphones', id: 1},
                {name:'speakers', path:'/category/speakers', id: 2},
                {name:'earphones', path:'/category/earphones', id: 3},
                ]
  return (
    <div className="md:flex  md:gap-8 md:basis-full lg:pl-[156px] ">{nav.map((item)=> <Link key={item.id} href={item.path}><p className="sub-title text-white tracking-[2px] text-center mb-4 md:mb-0">{item.name}</p></Link>)}</div>
  )
}

export default DesktopNav