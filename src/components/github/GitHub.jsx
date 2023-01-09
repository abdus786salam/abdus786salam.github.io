import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <VStack
      py={50}
      px={{ base: 10, lg: 100 }}
      bg={useColorModeValue("purple.100", "black.500")}
      id="Github"
    >
      <Box>
        <Heading
          fontSize="3xl"
          mb={5}
          py={50}
          textDecoration="underline"
          textDecorationColor="red"
          textUnderlineOffset="20px"
        >
          GITHUB STATS
        </Heading>
      </Box>
      <VStack>
        <Box>
          <GitHubCalendar
            username="abdus786salam"
            transformData={selectLastHalfYear}
          />
        </Box>

        <SimpleGrid
          p="5"
          m="16"
          gap={{ base: "3", md: "10" }}
          gridTemplateColumns={{ base: "1fr", lg: "repeat(3,1fr)" }}
        >
          <Image  src="https://streak-stats.demolab.com/?user=abdus786salam&theme=nord&border_radius=30&date_format=M%20j%5B%2C%20Y%5D" />
          <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=abdus786salam&layout=compact&theme=nord&border_radius=30" />
          <Image src="https://github-readme-stats.vercel.app/api?username=abdus786salam&count_private=true&theme=nord&border_radius=30" />
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}

export default Github;
