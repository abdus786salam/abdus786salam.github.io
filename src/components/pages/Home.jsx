import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Stack
    border='solid 1px red'
      py={130}
      px={{ base: 5, md: 100 }}
      spacing={10}
    >
      <Text fontSize='2xl'>Hello!, I'm a</Text>
      <Heading as='h1' size='4xl'
        bgGradient='linear(to-l,  #b92b27, #004E92)'
        bgClip='text'
        _hover={{

          bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}
      >Full Stack Web Developer</Heading>
      <Box
        as='button'
        px={10}
        py={4}
        w={200}
        fontSize='2xl'
        color='white'
        borderRadius='md'
        bgGradient='linear(to-r, teal.500, green.500)'
        _hover={{
          bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}
        onClick=''
      >
       Resume
      </Box>
    </Stack>
  )
}

export default Home