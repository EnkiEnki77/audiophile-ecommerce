import React, {useState} from 'react'
import BestGear from '../../components/BestGear'
import Categories from '../../components/Categories'
import CategoryHeader from '../../components/CategoryHeader'
import CategoryItems from '../../components/CategoryItems'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import data from '../../data.json'
import headphones from '../../public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'

type cartObj = {
  img: {mobile: string, tablet: string, desktop: string},
  name: string,
  price: number,
  counter: number
}

const Speakers = () => {
  console.log(data)
  const [cart, setCart] = useState<[] | cartObj[]>([])
 
  const items = data.filter(item => {return item.category === 'earphones'})
  const url = items[0].categoryImage.mobile.slice(1)
  console.log(items)
  return (
    <>
      <Header cart={cart}/>
      <CategoryHeader category='earphones'/>
      <div className='flex flex-col  mt-16 md:mt-[120px]'>
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