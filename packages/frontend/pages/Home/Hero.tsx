import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Get Inspired to Build in Web3.
            <br></br>
            <Text as={'span'} color={'green.300'} fontSize="5xl">
            showcase. discover. learn. 
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          The web 3 guide to all the best products. Whether you’re 
          new to the space or a vet of many years, dive into your favorite 
          products and discover why its speacial.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'green.400'}
              _hover={{ bg: 'orange.500' }}>
              Start Exploring
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
  