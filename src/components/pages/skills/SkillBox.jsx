import {
  Box,
  Img,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SkillBox = ({ title, src }) => {
  return (
    <Tooltip label={title} placement="top" fontSize="md" hasArrow>
    <Box
    m={5}
    borderRadius={5}
    _hover={{ transform: "scale(1.15)", transformOrigin: "50% 50%" }}
    transition="transform .5s"
      bg={useColorModeValue("blackAlpha.200", "purple.100")}
      h={{ base: 120, md: 130, lg: 150 }}
      w={{ base: 120, md: 130, lg: 150 }}
      p={5}
      color={"black"}
    >
      <VStack>
        <Img
          boxSize="70%"
          _hover={{ transform: "scale(1.15)", transformOrigin: "50% 50%" }}
          transition="transform .5s"
          src={src}
        />
        <Text>{title}</Text>
        </VStack>
    </Box>
      </Tooltip>
  );
};

export default SkillBox;
