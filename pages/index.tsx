import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Categories from '../components/Categories'
import Counter from '../components/Counter'
import FormElement from '../components/FormElement'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = 'true'/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <Banner/>
      <Categories/>
    </div>
  )
}

export default Home
