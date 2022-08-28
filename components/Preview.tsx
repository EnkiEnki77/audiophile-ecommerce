import React from 'react'

const Preview = (props: {gallery: {first:{[k:string]: string}, second:{[k:string]: string}, third:{[k:string]: string}}}) => {
    const images = Object.entries(props.gallery) 
    return (
        <div className="px-6 md:px-10 lg:px-[165px] flex flex-col gap-5 mb-[120px] group md:grid md:grid-rows-[174px_174px]  lg:grid-rows-[280px_280px] md:grid-cols-5 lg:mb-[160px]">
            {images.map(item => <img 
            className="rounded-lg 
            md:first:col-start-1 md:first:row-start-1 md:first:col-span-2 md:first:row-span-1
            md:last:col-start-3 md:last:row-start-1 md:last:col-span-3 md:last:row-span-full
            md:col-start-1 md:row-start-2 md:col-span-2 md:row-span-1 h-full w-full" 
            src={require(`../public${item[1].mobile.slice(1)}`).default.src} alt="" />)}
        </div>
    )
    }

export default Preview