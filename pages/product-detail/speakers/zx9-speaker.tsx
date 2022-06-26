import React from 'react'

const ZX9Speakers = () => {
  const itemData = data.filter(item => item.slug === 'xx99-mark-two-headphones')
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

export default ZX9Speakers