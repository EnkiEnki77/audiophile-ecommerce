import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import BestGear from '../components/BestGear'
import Button from '../components/Button'
import Categories from '../components/Categories'
import Counter from '../components/Counter'
import {useState} from 'react'
import Footer from '../components/Footer'
import FormElement from '../components/FormElement'
import Header from '../components/Header'
import ProductShowCont from '../components/ProductShowCont'
import {useAppSelector} from '../hooks'
import {useAppDispatch} from '../hooks'
import {increment, decrement, incrementByValue, decrementByValue} from '../features/counter'
import {MouseEvent} from 'react'

type cartObj = {
  img: {mobile: string, tablet: string, desktop: string},
  name: string,
  price: number,
  counter: number
}

const Home: NextPage = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const [cart, setCart] = useState<[] | cartObj[]>([])
  

  console.log(counter)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = 'true'/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header cart={cart}/>
      <Banner/>
      <Categories className='mb-[78px]'/>
      <ProductShowCont/>
      <BestGear/>
      <Footer/>
    </div>
  )
}

export default Home
