import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import hamburger from '../public/assets/shared/tablet/icon-hamburger.svg'
import siteLogo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import MobileMenu from './MobileMenu'
import Backdrop from './Backdrop'
import CheckoutModal from './CheckoutModal'
import DesktopNav from './DesktopNav'


type cartObj = {
  img: {mobile: string, tablet: string, desktop: string},
  name: string,
  price: number,
  counter: number
}

type HeaderProps = {
  cart: cartObj[]
}


 
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  } 


const Header = (props: HeaderProps) => {
  

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <header className="h-[90px] bg-black2 flex items-center justify-around md:justify-start md:px-10 lg:px-[165px] md:gap-10 fixed w-full z-20">
          { windowDimensions.width < 1024 && <img  src={hamburger.src} alt="" onClick={handleToggleMenu}/>}
          <Link href='/'>
              <img src={siteLogo.src} alt="" onClick={() => {return( setToggleCart(false), setToggleMenu(false))}}/>
          </Link>
          { windowDimensions.width >= 1024 && <DesktopNav/>}
          <img className='md:ml-auto' src={cart.src} alt="" onClick={handleToggleCart} />
      </header>
      {toggleMenu && [<MobileMenu/>, <Backdrop/>]}
      {toggleCart && [<CheckoutModal cart = {props.cart}/>, <Backdrop/>]}
    </div>
  )
}

export default Header