import Link from 'next/link'
import React, { useState } from 'react'
import hamburger from '../public/assets/shared/tablet/icon-hamburger.svg'
import siteLogo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import MobileMenu from './MobileMenu'
import Backdrop from './Backdrop'
import CheckoutModal from './CheckoutModal'

type HeaderProps = {
  cart: number[]
}

const Header = (props: HeaderProps) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)

  const handleToggleMenu = () => {
    if(toggleCart){
      setToggleCart(false)
    }

    setToggleMenu(prev => !prev)
  }

  const handleToggleCart = () => {
    if(toggleMenu){
      setToggleMenu(false)
    }

    setToggleCart(prev => !prev)
  }

  return (
    <div className='relative w-full '>
      <header className="h-[90px] bg-black2 flex items-center justify-around fixed w-full z-20">
          <img src={hamburger.src} alt="" onClick={handleToggleMenu}/>
          <Link href='/'>
              <img src={siteLogo.src} alt="" onClick={() => {return( setToggleCart(false), setToggleMenu(false))}}/>
          </Link>
          <img src={cart.src} alt="" onClick={handleToggleCart} />
      </header>
      {toggleMenu && [<MobileMenu/>, <Backdrop/>]}
      {toggleCart && [<CheckoutModal cart = {props.cart}/>, <Backdrop/>]}
    </div>
  )
}

export default Header