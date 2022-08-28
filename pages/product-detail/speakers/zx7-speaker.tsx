import React, { useState } from 'react'
import AddToCart from '../../../components/AddToCart'
import BestGear from '../../../components/BestGear'
import Categories from '../../../components/Categories'
import Features from '../../../components/Features'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import InTheBox from '../../../components/InTheBox'
import Preview from '../../../components/Preview'
import Product from '../../../components/Product'
import YouMayAlsoLike from '../../../components/YouMayAlsoLike'
import headphones from '../../../public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import data from '../../../data.json'
import Link from 'next/link'


type cartObj = {
  img: {mobile: string, tablet: string, desktop: string},
  name: string,
  price: number,
  counter: number
}

const ZX7Speakers = () => {
  const itemData = data.filter(item => item.slug === 'zx7-speaker')
  console.log(itemData)
  const [counter, setCounter] = useState(0)
  const [cart, setCart] = useState<[] | cartObj[]>([])
  

  const decrement = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) =>  {
    if(counter === 0){
      return 
    }
    
    return setCounter(prev => prev - 1 )
  }

  const increment = (e: React.MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>) => {
    setCounter(prev => prev + 1 )
  }

  const onAddToCart = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('added to cart')
    setCart([{img:itemData[0].image, name:itemData[0].name.replace(' Speaker',''), price: itemData[0].price, counter: counter}])
  }

  console.log(itemData[0].name)

  return (
    <>
      <Header cart={cart}/>
      <Link href={`/category/${itemData[0].category}`}><p className='pt-[106px] lg:pt-[156px] px-6 md:px-10 lg:px-[160px]'>Go Back</p></Link>
      <Product counter={counter} increment={increment} decrement={decrement} onAddToCart={onAddToCart} image={itemData[0].image} new={itemData[0].new} name={itemData[0].name} description={itemData[0].description} price={itemData[0].price}/>
      <div className="lg:flex lg:mb-[160px] lg:gap-[80px]">
        <Features features={itemData[0].features}/>
        <InTheBox includes={itemData[0].includes}/>
      </div>
      <Preview gallery={itemData[0].gallery}/>
      <YouMayAlsoLike others={itemData[0].others}/>
      <Categories className='mb-[78px] pt-0'/>
      <BestGear/>
      <Footer/>
    </>
  )
}

export default ZX7Speakers