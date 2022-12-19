import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Text,
  Icon,
  Link,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        display={{ base: "flex", lg: "none" }}
        _hover={{ color: "teal" }}
        variant="ghost"
        ref={btnRef}
        onClick={onOpen}
      >
        <Icon w={6} h={6} as={HamburgerIcon} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue("gray.200", "gray.900")}>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                <Link as={ReactLink} to="/">
                  <Text fontSize="xl">Home</Text>
                </Link>
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                <Link as={ReactLink} to="/about">
                  <Text fontSize="xl">About</Text>
                </Link>
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                <Link as={ReactLink} to="/skills">
                  <Text fontSize="xl">Skills</Text>
                </Link>
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                <Link as={ReactLink} to="/projects">
                  <Text fontSize="xl">Projects</Text>
                </Link>
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                <Link as={ReactLink} to="/contact">
                  <Text fontSize="xl">Contact</Text>
                </Link>
              </Button>
              <Link href="./assets/Abdus_Salam_Resume.pdf" target="_blank" download>
                <Button
                  fontSize="xl"
                  color="white"
                  borderRadius="md"
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                  variant="ghost"
                >
                  <Text>Resume</Text>
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerMenu;
