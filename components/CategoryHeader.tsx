import React from 'react'


const CategoryHeader = (props: {category: string}) => {
  return (
    <div className="bg-black h-[192px] pt-[90px] flex items-center justify-center">
        <h4 className="text-white">{props.category}</h4>
    </div>
  )
}

export default CategoryHeader