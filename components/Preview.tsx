import React from 'react'

const Preview = (props: {gallery: {first:{[k:string]: string}, second:{[k:string]: string}, third:{[k:string]: string}}}) => {
    const images = Object.entries(props.gallery) 
    return (
        <div className="px-6 md:px-10 lg:px-[165px] flex flex-col gap-5 mb-[120px] group md:grid md:grid-rows-2  auto-cols-min lg:mb-[160px]">
            {images.map(item => <img 
            className="rounded-lg md:first:col-start-1 md:first:col-end-2 md:first:row-start-1 
            md:first:row-end-2 md:first:max-w-[277px] md:max-w-[277px] md:h-full md:first:h-full md:last:row-start-1 md:last:row-end-3 md:last:col-start-2 
            md:last:col-end-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:last:min-w-[395px] md:last:max-h-[368px]" 
            src={require(`../public${item[1].mobile.slice(1)}`).default.src} alt="" />)}
        </div>
    )
    }

export default Preview