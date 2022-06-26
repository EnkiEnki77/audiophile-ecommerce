import React from 'react'
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

const XX59Headphones = () => {
  const itemData = data.filter(item => item.slug === 'xx59-headphones')
  console.log(itemData)
  return (
    <>
      <Header/>
      <Link href={`/category/${itemData[0].category}`}><p className='pt-[106px] px-6'>Go Back</p></Link>
      <Product image={itemData[0].image} new={itemData[0].new} name={itemData[0].name} description={itemData[0].description} price={itemData[0].price}/>
      <AddToCart/>
      <Features features={itemData[0].features}/>
      <InTheBox includes={itemData[0].includes}/>
      <Preview gallery={itemData[0].gallery}/>
      <YouMayAlsoLike others={itemData[0].others}/>
      <Categories className='mb-[78px] pt-0'/>
      <BestGear/>
      <Footer/>
    </>
  )
}

export default XX59Headphones