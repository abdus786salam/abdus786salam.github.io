import React from "react";
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
import { HashLink } from "react-router-hash-link";

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
        size="xs"
      >
        <DrawerOverlay  />
        <DrawerContent maxHeight='max-content' bg={useColorModeValue("gray.200", "gray.900")}>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                 <HashLink smooth to='#home'>
                        <Text fontSize="xl" >Home</Text>
                    </HashLink >
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                <HashLink smooth to='#about'>
                        <Text fontSize="xl" >About</Text>
                    </HashLink>
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
               <HashLink smooth to='#skills'>
                        <Text fontSize="xl" >Skills</Text>
                    </HashLink>
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
               <HashLink smooth to='#projects'>
                        <Text fontSize="xl" >Projects</Text>
                    </HashLink>
              </Button>
              <Button
                _hover={{ color: "teal" }}
                onClick={onClose}
                variant="ghost"
              >
                <HashLink smooth to='#contact'>
                        <Text fontSize="xl" >Contact</Text>
                    </HashLink>
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
