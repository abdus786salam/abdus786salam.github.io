import React from "react";
import { Heading, useColorModeValue, VStack, Grid } from "@chakra-ui/react";
import ProjectBox from "./ProjectBox";
import { projectDetails } from "./projectDetails";
const Projects = () => {
  return (
    <VStack
      py={50}
      id="projects"
      px={{ base: 10, lg: 100 }}
      bg={useColorModeValue("purple.100", "black.500")}
    >
      <Heading
        fontSize="3xl"
        mb={5}
        py={50}
        textDecoration="underline"
        textDecorationColor="red"
        textUnderlineOffset="20px"
      >
        Projects
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
      >
        {projectDetails.map((project, i) => (
          <ProjectBox key={i} {...project} />
        ))}
      </Grid>
    </VStack>
  );
};

export default Projects;
