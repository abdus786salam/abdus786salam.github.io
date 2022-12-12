import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiGithub,
} from "react-icons/si";
import React from "react";
import { Link } from "react-router-dom";

const techStack = [
  { logo: SiHtml5, name: "HTML", color: "tomato" },
  { logo: SiCss3, name: "CSS", color: "blue" },
  { logo: SiJavascript, name: "JavaScript", color: "yellow.400" },
  { logo: SiReact, name: "React", color: "blue.400" },
  { logo: SiChakraui, name: "Chakra-UI", color: "blue.400" },
];

const ProjectBox = () => {
  return (
    <Flex
      boxShadow="outline"
      rounded="md"
      p={{ base: 5, md: 10 }}
      mx={50}
      gap={10}
      // borderRadius={10}
      direction={{ base: "column", md: "row" }}
    >
      <Box flex={1.5}>
        <Image
          src="../assets/projectStuff/coSchedule1.JPG"
          boxSize="borderBox"
          alt="photo"
        />
      </Box>
      <Box flex={1}>
        <VStack spacing={10}>
          <Heading fontSize="xl">
            Clone Of CoSchedule
            <Badge ml={2} p={1} variant="outline" colorScheme="teal">
              Individual
            </Badge>
          </Heading>

          <Text fontSize="lg" textAlign="justify">
            CoShedule is social media managing app. Using this App user can
            manage different social media accounts and projects. They schedule
            their social media posts and also track their project progress.
          </Text>
          <HStack spacing={{ md: 5 }}>
            {techStack?.map((item) => (
              <Tooltip label={item.name} hasArrow>
                <span>
                  <Icon
                    bg="white"
                    color={item.color}
                    fontSize="6xl"
                    as={item.logo}
                  />
                </span>
              </Tooltip>
            ))}
          </HStack>
          <HStack spacing={20}>
            <Tooltip label="Code Base" hasArrow>
              <Button size="lg">
                <a
                  href="https://github.com/abdus786salam/ambiguous-class-8142"
                  target="_blank"
                >
                  <span>
                    <Icon as={SiGithub} boxSize={8} />
                  </span>
                </a>
              </Button>
            </Tooltip>
            <Tooltip label="Code Base" hasArrow>
              <Button
                fontSize="xl"
                px={10}
                py={4}
                color="white"
                borderRadius="md"
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                variant="ghost"
              >
                <Text>Live</Text>
              </Button>
            </Tooltip>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ProjectBox;
