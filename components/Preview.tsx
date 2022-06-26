import React from 'react'

const Preview = (props: {gallery: {first:{[k:string]: string}, second:{[k:string]: string}, third:{[k:string]: string}}}) => {
    const images = Object.entries(props.gallery) 
    return (
        <div className="px-6 flex flex-col gap-5 mb-[120px]">
            {images.map(item => <img className="rounded-lg" src={require(`../public${item[1].mobile.slice(1)}`).default.src} alt="" />)}
        </div>
    )
    }

export default Preview