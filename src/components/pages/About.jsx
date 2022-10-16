import { Box, Flex, Heading, VStack, Stack, Text, Image, Center } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <VStack
      py={100}
      px={{ base: 5, md: 100 }}>
      <Text fontSize='3xl' textDecoration='underline' textUnderlineOffset='20px'>About me</Text>
      <Stack spacing={20} direction={{ base: 'column', md: 'row' }}>
        <Box BoxSize='sm' >
          <Image src='../salam_photo.png' borderRadius='full' alt='photo' />
        </Box>
        <Center>
          <Text fontSize='lg' textAlign='justify'>
            Aspiring Full Stack Web Developer. Able to build Websites using HTML, CSS and JavaScript. Hands-on
            experience in collaborative projects. passionate about coding and strongly interested in working in a
            product-based company.
          </Text>
        </Center>
      </Stack>
    </VStack>
  )
}

export default About