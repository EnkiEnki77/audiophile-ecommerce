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



 



const Header = () => {
  

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const [width, setWidth] = useState(0)
 

  useEffect(() => {
   const defaultSize = () => {
    setWidth(window.innerWidth)
   }
   
   const handleResize = () => {
    setWidth(window.innerWidth)
   }
    
    defaultSize()
    window.addEventListener('resize', handleResize)
  }, [width])

  console.log(width)

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
      <header className="h-[90px] bg-black2 flex items-center px-6 justify-around lg:justify-between md:justify-start md:px-10 lg:px-[165px] md:gap-10 fixed w-full z-20">
          { width < 1024 && <img className=''  src={hamburger.src} alt="" onClick={handleToggleMenu}/>}
          <Link href='/'>
              <img  src={siteLogo.src} alt="" onClick={() => {return( setToggleCart(false), setToggleMenu(false))}}/>
          </Link>
          { width >= 1024 && <DesktopNav/>}
          
        <img className=' md:ml-auto lg:ml-0' src={cart.src} alt="" onClick={handleToggleCart} />
            
          
      </header>
      {toggleMenu && [<MobileMenu/>, <Backdrop/>]}
      {toggleCart && [<CheckoutModal/>, <Backdrop/>]}
      
    </div>
  )
}

export default Header