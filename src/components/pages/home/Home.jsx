import {
  Box,
  Heading,
  Stack,
  Link,
  useColorModeValue,
  Icon,
  Flex,
  Img,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import "./Home.css";
import { MdWavingHand } from "react-icons/md";
import {  HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <Flex
      id="home"
      py={130}
      px={{ base: 5, md: "auto" }}
      bg={useColorModeValue("gray.200", "gray.900")}
      gap={20}
      alignItems="center"
      justifyContent="center"
      direction={{ base: "column", md: "row" }}
    >
      <Img
        src="../salam_photo.png"
        boxSize="300px"
        border='5px solid teal'
        order={{ base: 1, md: 2 }}
        borderRadius="full"
        alt="photo"
      />
      <Stack order={{ base: 2, md: 1 }}>
        <Heading fontSize="2xl">
          Hello{" "}
          <span>
            {" "}
            <Icon id="hand" as={MdWavingHand} color="orange" />{" "}
          </span>{" "}
          I'm
          <span style={{ color: "teal" }}> Abdus Salam</span>{" "}
        </Heading>
        <Heading
          className="profiletitle"
          as="h1"
          size={{ base: "lg", md: "xl" }}
          bgGradient="linear(to-l,  #b92b27, #004E92)"
          bgClip="text"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          Full Stack Web Developer
        </Heading>
        <Link href="./assets/Abdus_Salam_Resume.pdf" target={"_blank"} download>
          <Tooltip label="download resume" hasArrow>
            <Box
              as="button"
              px={10}
              py={4}
              w={200}
              fontSize="2xl"
              color="white"
              borderRadius="md"
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              <Icon as={HiDownload} mr={1} />
              Resume
            </Box>
          </Tooltip>
        </Link>
      </Stack>
    </Flex>
  );
};

export default Home;
