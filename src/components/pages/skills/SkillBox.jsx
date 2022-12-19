import {
  Box,
  Img,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const SkillBox = ({ title, src }) => {
  return (
    <Box
    borderRadius={5}
    _hover={{ transform: "scale(1.15)", transformOrigin: "50% 50%" }}
    transition="transform .5s"
      bg={useColorModeValue("blackAlpha.50", "purple.100")}
      h={{ base: 150, md: 170, lg: 200 }}
      w={{ base: 150, md: 170, lg: 200 }}
      overflow="hidden"
      p={5}
    >
      <Tooltip label={title} placement="top" fontSize="md" hasArrow>
        <Img
          boxSize="90%"
          _hover={{ transform: "scale(1.15)", transformOrigin: "50% 50%" }}
          transition="transform .5s"
          src={src}
        />
      </Tooltip>
    </Box>
  );
};

export default SkillBox;
