import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Hero from './Hero'
import Featured from './Featured'
import Marketplace from './Marketplaces'
import Mobile from './Mobile'
import Wallets from './Wallets'

const Auth: NextPage = () => {
    return (
    <>
        <Navbar />
            <Hero />
            <Featured />
            <Marketplace />
            <Mobile />
            <Wallets />
        <Footer />
    </>
  )
}

export default Auth