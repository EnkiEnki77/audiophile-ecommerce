import Link from 'next/link'
import React from 'react'
import hamburger from '../public/assets/shared/tablet/icon-hamburger.svg'
import siteLogo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'

const Header = () => {
  return (
    <header className="h-[90px] bg-black2 flex items-center justify-around fixed w-full z-20">
        <img src={hamburger.src} alt="" />
        <Link href='/'>
            <img src={siteLogo.src} alt="" />
        </Link>
        <Link href='/checkout'>
            <img src={cart.src} alt="" />
        </Link>
    </header>
  )
}

export default Header