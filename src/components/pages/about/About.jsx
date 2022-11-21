import { Flex, VStack, Text, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <VStack
    id='about'
      py={50}
      bg={useColorModeValue('purple.100', 'black.500')}
      px={{ base: 5, md: 200 }}>
      <Text fontSize='3xl' mb={20} textDecoration='underline' textDecorationColor='red' textUnderlineOffset='20px'>About me</Text>
      <Flex gap={20} alignItems='center' direction={{ base: 'column', md: 'row' }}>
        <Image src='../salam_photo.png' boxSize='300px'  borderRadius='full' alt='photo' />
        <Text maxW={400} fontSize='lg' textAlign='justify'>
          Aspiring Full Stack Web Developer. Able to build Websites using HTML, CSS and JavaScript. Hands-on
          experience in collaborative projects. passionate about coding and strongly interested in working in a
          product-based company.
        </Text>
      </Flex>

    </VStack>
  )
}

export default About