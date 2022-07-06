import React from 'react'
import logo from '../public/assets/shared/desktop/logo.svg'
import facebook from '../public/assets/shared/desktop/icon-facebook.svg'
import twitter from '../public/assets/shared/desktop/icon-twitter.svg'
import instagram from '../public/assets/shared/desktop/icon-instagram.svg'
import Link from 'next/link'

const Footer = () => {
    const nav = [{name:'home', path:'/'}, 
                {name:'headphones', path:'/category/headphones', id: 1},
                {name:'speakers', path:'/category/speakers', id: 2},
                {name:'earphones', path:'/category/earphones', id: 3},
                ]
    const social = [{social: facebook, id: 1},{social: twitter, id: 2},{social: instagram, id: 3}]
  return (
    <footer className="px-6 md:px-10 md:max-h-[400px] pt-[52px] pb-[38px] md:pt-[60px] md:pb-[46px] bg-black2 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-8 md:flex-wrap">
        <img src={logo.src} alt="" />
        <div className="md:flex  md:gap-8 md:basis-full">{nav.map((item)=> <Link key={item.id} href={item.path}><p className="sub-title text-white tracking-[2px] text-center mb-4 md:mb-0">{item.name}</p></Link>)}</div>
        <p className="text-white opacity-50 text-center md:text-left">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p className="text-white opacity-50 md:basis-1/2">Copyright 2021. All Rights Reserved</p>
        <div className='flex justify-center md:justify-end gap-4 md:basis-auto md:ml-auto'>{social.map((item, i) => <img key={i} className='w-6 h-auto' src={item.social.src}/>)}</div>
    </footer>
  )
}

export default Footer