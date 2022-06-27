import React from 'react'
import BestGear from '../../components/BestGear'
import Categories from '../../components/Categories'
import CategoryHeader from '../../components/CategoryHeader'
import CategoryItems from '../../components/CategoryItems'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import data from '../../data.json'
import headphones from '../../public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'

const Speakers = () => {
  console.log(data)
  const url = data[0].categoryImage.mobile.slice(1)
  console.log(url)
  const items = data.filter(item => {return item.category === 'speakers'})
  return (
    <>
      <Header/>
      <CategoryHeader category='speakers'/>
      <div className='flex flex-col  mt-16'>
          {items.map(item => {return <CategoryItems key={item.id} img={item.categoryImage} 
          productName={item.name} productDescript={item.description} productNew={item.new} slug={item.slug} category={item.category}/>})}
      </div>
      <Categories className='mb-[78px] pt-0'/>
      <BestGear/>
      <Footer/>
    </>
  )
}

export default Speakers