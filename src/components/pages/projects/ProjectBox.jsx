import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { SiGithub } from "react-icons/si";


const ProjectBox = ({
  projectTitle,
  projectType,
  projectImage,
  projectDiscription,
  projectGithubLink,
  projectDeployLink,
  techStack,
}) => {
  return (
    <Flex
      boxShadow="outline"
      rounded="md"
      p={{ base: 5, md: 10 }}
      // mx={50}
      gap={10}
    >
      <Box>
        <VStack spacing={5}>
          <Heading fontSize="2xl">
            {projectTitle}
            <Tooltip label="Project type" placement="top" hasArrow>
              <Badge ml={2} p={1} variant="outline" colorScheme="teal">
               {projectType}
              </Badge>
            </Tooltip>
          </Heading>

          <Box>
            <Image
              src={projectImage}
              boxSize="borderBox"
              alt={`${projectTitle} ${" "} image`}
            />
          </Box>

          <Text fontSize={{ base: "lg", md: "2xl" }} textAlign="justify">
           {projectDiscription}
          </Text>
          <HStack spacing={5}>
            {techStack?.map(
              (item, i) => (
                <Tooltip key={i + 1} label={item.name} hasArrow>
                  <span>
                    <Icon
                      bg="white"
                      color={item.color}
                      fontSize={{ base: "4xl", md: "6xl" }}
                      as={item.logo}
                    />
                  </span>
                </Tooltip>
              ),
              0
            )}
          </HStack>
          <HStack spacing={20}>
            <Tooltip label="Code Base" hasArrow>
              <Button size="lg">
                <a
                  href={projectGithubLink}
                  target="_blank"
                >
                  <span>
                    <Icon as={SiGithub} boxSize={8} />
                  </span>
                </a>
              </Button>
            </Tooltip>
            <Tooltip label="Code Base" hasArrow>
              <a
                href={projectDeployLink}
                target="_blank"
              >
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
              </a>
            </Tooltip>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ProjectBox;
