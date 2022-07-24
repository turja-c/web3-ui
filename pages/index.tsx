import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import HomeBanner from './components/HomeBanner'
import Cards from './components/Cards'
import Footer from './components/Footer'


const Home: NextPage = () => {
  return (
    <div >
      <Navbar />
      <HomeBanner />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
