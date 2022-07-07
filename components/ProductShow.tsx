import { StaticImageData } from 'next/image'
import React from 'react'
import Button from './Button'
import asd from '../public/assets/home/desktop/pattern-circles.svg'
import zx9two from '../public/assets/home/desktop/image-speaker-zx9.png'

interface showcaseProps{
    img: StaticImageData,
    img2?: StaticImageData,
    path: string,
    id: string
}

const ProductShow = (props: showcaseProps) => {
  return (
    <>
        {props.id === 'zx9 speaker' &&
            <div className='px-6 py-[55px] md:pt-[55px] md:pb-10 md:h-[720px] lg:h-[560px] lg:pb-0 bg-brown rounded-lg flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6 lg:gap-[140px] bg-circles bg-cover bg-bottom'>
                <picture>
                    <source srcSet={zx9two.src} media="(min-width: 1024px)"/>
                    <img className='  min-h-[207px] max-h-[493px] w-auto mb-2 md:mb-10 lg:mb-0 self-end' src={props.img.src} alt="" />
                </picture>
                <div className='flex flex-col items-center lg:items-start lg:gap-6 mt-6'>
                    <h2 className='text-center lg:text-left max-w-[300px] text-white font-bold md:text-[56px] uppercase md:leading-[58px] md:tracking-[2px]'>{props.id}</h2>
                    <p className='text-center lg:text-left max-w-[350px] text-white opacity-75 md:mb-4'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Button btn='btn-2' href={props.path} className='bg-black text-white active:bg-white active:text-black'>see product</Button>
                </div>
            </div>
            ||
        props.id === 'zx7 speaker' &&
            <div className='h-80 rounded-lg bg-zx7 md:bg-mdzx7 lg:bg-lgzx7 bg-cover flex flex-col justify-center gap-8 px-6 md:px-[72px]'>
                <h4>{props.id}</h4>
                <Button btn='btn-2' href={props.path}>see product</Button>
            </div>
            ||
        props.id === 'yx1 earphones' &&
            <div className='h-[424px] md:h-80 flex flex-col md:flex-row justify-between'>
                <div className='bg-yx1 md:bg-mdyx1 lg:bg-lgyx1 md:basis-1/2 bg-cover h-[200px] md:h-full rounded-lg'></div>
                <div className='flex flex-col md:basis-1/2 justify-between md:justify-center px-6 py-[41px] bg-grey rounded-lg gap-8'>
                    <h4>{props.id}</h4>
                    <Button btn='btn-2' href={props.path}>see product</Button>
                </div>
            </div>
        }
    </>
  )
}

export default ProductShow