import { Flex, VStack, Text, Image, useColorModeValue, Heading, Box, Center } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <VStack
      id="about"
      py={50}
      bg={useColorModeValue("purple.100", "black.500")}
      px={{ base: 5, md: "auto" }}
    >
      <Heading
        fontSize="3xl"
        mb={20}
        textDecoration="underline"
        textDecorationColor="red"
        textUnderlineOffset="20px"
      >
        About me
      </Heading>
      <Flex
        gap={20}
        alignItems="center"
        justifyContent='center'
        direction={{ base: "column", md: "row" }}
      >
        <Box flex='1'>
          <Center>

        <Image
       
          src="https://img.freepik.com/premium-vector/simple-flat-vector-cartoon-illustration-man-figure-having-video-conference-with-group-people_24381-1416.jpg?w=826"
          boxSize="300px"
          borderRadius="full"
          alt="photo"
        />
          </Center>
        </Box >
        <Box  flex='1'>
          
        <Text fontSize={{base:"lg",md:"2xl"}} textAlign="justify">
          Aspiring Full Stack Web Developer. Able to build Websites using HTML,
          CSS and JavaScript. Hands-on experience in collaborative projects.
          passionate about coding and strongly interested in working in a
          product-based company.
        </Text>
        </Box>
      </Flex>
    </VStack>
  );
};

export default About;
