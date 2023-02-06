import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SiGithub, SiGmail } from "react-icons/si";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <VStack 
    py={50} 
    bg={useColorModeValue("purple.100", "black.500")}
    id="contact" 
    px={{ base: 10, lg: 100 }}>
      <Heading
        fontSize="3xl"
        mb={5}
        py={50}
        textDecoration="underline"
        textDecorationColor="red"
        textUnderlineOffset="20px"
      >
        Contact Me
      </Heading>
      <VStack>
        <Box>
        <HStack>
          <Icon as={SiGmail} /> <span>abdus786salam@gmail.com</span>
        </HStack>
        <HStack>
          <Icon as={BsFillTelephoneFill} />{" "}
          <span>+917042135876</span>
        </HStack>
        <HStack>
          <Icon as={MdLocationPin} />{" "}
          <span>Bihar (India)</span>
        </HStack>
        <HStack mt={10}>
          <Tooltip label="GitHub" hasArrow>
            <Button size="lg">
              <a
                href="https://github.com/abdus786salam"
                target="_blank"
              >
                <span>
                  <Icon as={SiGithub} boxSize={8} />
                </span>
              </a>
            </Button>
          </Tooltip>
          <Tooltip label="LinkedIn" hasArrow>
            <Button size="lg">
              <a
                href="https://www.linkedin.com/in/abdus-salam-25921394/"
                target="_blank"
              >
                <span>
                  <Icon as={BsLinkedin} boxSize={8} />
                </span>
              </a>
            </Button>
          </Tooltip>
        </HStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Contact;
