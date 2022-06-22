import React from 'react'
import logo from '../public/assets/shared/desktop/logo.svg'
import facebook from '../public/assets/shared/desktop/icon-facebook.svg'
import twitter from '../public/assets/shared/desktop/icon-twitter.svg'
import instagram from '../public/assets/shared/desktop/icon-instagram.svg'
import Link from 'next/link'

const Footer = () => {
    const nav = [{name:'home', path:'/'}, 
                {name:'headphones', path:'/category/headphones'},
                {name:'speakers', path:'/category/speakers'},
                {name:'earphones', path:'/category/earphones'},
                ]
    const social = [facebook,twitter,instagram]
  return (
    <footer className="px-6 pt-[52px] pb-[38px] bg-black2 flex flex-col items-center gap-12">
        <img src={logo.src} alt="" />
        <div>{nav.map(item => <Link href={item.path}><p className="sub-title text-white tracking-[2px] text-center mb-4">{item.name}</p></Link>)}</div>
        <p className="text-white opacity-50 text-center">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p className="text-white opacity-50">Copyright 2021. All Rights Reserved</p>
        <div className='flex justify-center gap-4'>{social.map(item => <img className='w-6 h-auto' src={item.src}/>)}</div>
    </footer>
  )
}

export default Footer