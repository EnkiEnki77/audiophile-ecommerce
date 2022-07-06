import React from 'react'
import Category from './Category'
import earphones from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'

const Categories = (props: {className?: string}) => {
    const categories = [{img:headphones, category:'headphones',
                        href: '/category/headphones',
                        id: 1
                        },
                        {img:speakers, category:'speakers',
                        href: '/category/speakers',
                        id: 2
                        },  
                        {img:earphones, category:'earphones',
                        href: '/category/earphones',
                        id: 3
                        }, 
                        ]
  return (
    <div className={`${props.className} px-6 md:px-10 py-10 flex flex-col md:flex-row gap-4 md:gap-[10px] z-10`}>
        {categories.map((category) => <Category key={category.id} img={category.img} category={category.category} href={category.href}/>)}
    </div>
  )
}

export default Categories