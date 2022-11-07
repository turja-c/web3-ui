import { Image, Text, Box, HStack, Container } from '@chakra-ui/react'
import React from 'react'

function Featured() {

    const featured = {
        imageUrl: 'https://bafybeidg2n55izufjix66osrvmwavjvajpq5mfou6lukze5cu32xdprfuq.ipfs.dweb.link/WSCryptoNerds-55.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Modern home in city center in the heart of historic Los Angeles',
        reviewCount: 34,
        rating: 4,
      }

  return (
    <Container maxW="6xl">
        <Text> Featured Websites</Text>
        <Text> this week’s most popular featured products. have you tried it out?</Text>
        
        <HStack>
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image 
                alt='testing'
                src={featured.imageUrl}
            />
            <Box>
                <Text> {featured.title} </Text>
                <Text> {featured.reviewCount} | {featured.rating}</Text>
            </Box>
        </Box>

        <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image 
                alt='testing'
                src={featured.imageUrl}
            />
            <Box>
                <Text> {featured.title} </Text>
                <Text> {featured.reviewCount} | {featured.rating}</Text>
            </Box>
        </Box>

        <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image 
                alt='testing'
                src={featured.imageUrl}
            />
            <Box>
                <Text> {featured.title} </Text>
                <Text> {featured.reviewCount} | {featured.rating}</Text>
            </Box>
        </Box>
        </HStack>
    </Container>
  )
}

export default Featured