import React from 'react'
import Category from './Category'
import earphones from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'

const Categories = (props: {className: string}) => {
    const categories = [{img:headphones, category:'headphones',
                        href: '/category/headphones'},
                        {img:speakers, category:'speakers',
                        href: '/category/speakers'},  
                        {img:earphones, category:'earphones',
                        href: '/category/earphones'}, 
                        ]
  return (
    <div className={`${props.className} px-6 py-10 flex flex-col gap-4`}>
        {categories.map(category => <Category img={category.img} category={category.category} href={category.href}/>)}
    </div>
  )
}

export default Categories