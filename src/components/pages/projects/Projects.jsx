import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
  SimpleGrid,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import ProjectBox from "./ProjectBox";
const Projects = () => {
  return (
    <VStack
      id="projects"
      p={{base:10,md:100}}
      bg={useColorModeValue("purple.100", "black.500")}
    >
      <Text
        fontSize="3xl"
        mb={5}
        py={50}
        textDecoration="underline"
        textDecorationColor="red"
        textUnderlineOffset="20px"
      >
        Projects
      </Text>
      <ProjectBox />
    </VStack>
  );
};

export default Projects;
