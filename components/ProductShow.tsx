import { StaticImageData } from 'next/image'
import React from 'react'
import Button from './Button'

interface showcaseProps{
    img: StaticImageData,
    path: string,
    id: string
}

const ProductShow = (props: showcaseProps) => {
  return (
    <>
        {props.id === 'zx9 speaker' &&
            <div className='px-6 py-[55px] bg-brown rounded-lg flex flex-col items-center gap-6'>
                <img className='h-[207px] w-auto mb-2' src={props.img.src} alt="" />
                <h2 className='text-center text-white'>{props.id}</h2>
                <p className='text-center text-white opacity-75'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button btn='btn-2' href={props.path} className='bg-black text-white active:bg-white active:text-black'>see product</Button>
            </div>
            ||
        props.id === 'zx7 speaker' &&
            <div className='h-80 rounded-lg bg-zx7 bg-cover flex flex-col justify-center gap-8 px-6'>
                <h4>{props.id}</h4>
                <Button btn='btn-2' href={props.path}>see product</Button>
            </div>
            ||
        props.id === 'yx1 earphones' &&
            <div className='h-[424px] flex flex-col justify-between'>
                <div className='bg-yx1 bg-cover h-[200px] rounded-lg'></div>
                <div className='flex flex-col justify-between px-6 py-[41px] bg-grey rounded-lg gap-8'>
                    <h4>{props.id}</h4>
                    <Button btn='btn-2' href={props.path}>see product</Button>
                </div>
            </div>
        }
    </>
  )
}

export default ProductShow