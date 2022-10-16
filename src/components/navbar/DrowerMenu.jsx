import React from "react"
import { Link as ReactLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
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
    useDisclosure
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"

function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button  display={{ base: "flex", md: "none" }} _hover={{ color: 'teal' }} variant='ghost' ref={btnRef} onClick={onOpen}>
                <Icon  w={6} h={6} as={HamburgerIcon} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack>
                            <Button _hover={{ color: 'teal' }} onClick={onClose} variant='ghost'>
                                <Link as={ReactLink} to='/'>
                                    <Text fontSize="xl" >Home</Text>
                                </Link>
                            </Button>
                            <Button _hover={{ color: 'teal' }} onClick={onClose} variant='ghost'>
                                <Link as={ReactLink} to='/about'>
                                    <Text fontSize="xl" >About</Text>
                                </Link>
                            </Button>
                            <Button _hover={{ color: 'teal' }} onClick={onClose} variant='ghost'>
                                <Link as={ReactLink} to='/skills'>
                                    <Text fontSize="xl" >Skills</Text>
                                </Link>
                            </Button>
                            <Button _hover={{ color: 'teal' }} onClick={onClose} variant='ghost'>
                                <Link as={ReactLink} to='/projects'>
                                    <Text fontSize="xl" >Projects</Text>
                                </Link>
                            </Button>
                            <Button _hover={{ color: 'teal' }} onClick={onClose} variant='ghost'>
                                <Link as={ReactLink} to='/contact'>
                                    <Text fontSize="xl" >Contact</Text>
                                </Link>
                            </Button>
                            <ColorModeSwitcher justifySelf="flex-end" />
                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerMenu