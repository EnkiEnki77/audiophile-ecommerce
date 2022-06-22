import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Counter from '../components/Counter'
import FormElement from '../components/FormElement'

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

      <h2>Almost before we knew it, we had left the ground.</h2>
      <Button btn='btn-1' href='/cards'>see product</Button>
      <Button btn='btn-2' href='/cards'>see product</Button>
      <Button btn='btn-3' href='/cards'>see product</Button>
      <FormElement inputType='text' label='Name' id='name'/>
      <FormElement inputType='radio' label='e-Money' id='radio'/>
      <Counter/>
    </div>
  )
}

export default Home
