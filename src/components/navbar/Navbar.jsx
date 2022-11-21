import React from 'react'
import { Flex, Spacer, HStack, Button, Text, useColorModeValue } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import "./Navbar.css"
import DrawerMenu from './DrowerMenu';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    // const [isMobile, setMobile] = React.useState(false)
    return (
        <Flex
            py={8}
            px={{ base: 5, md: 100 }}
            position='sticky'
            top='0'
            bg={useColorModeValue('gray.200', 'gray.900')}
            boxShadow='lg'
            alignItems='center'
            gap='5'>
            <Button _hover={{ color: 'teal' }} variant='ghost'>
                <HashLink smooth to='#home'>
                    <Text fontSize="2xl" >Portfolio</Text>
                </HashLink>
            </Button>
            <Spacer />
            <DrawerMenu />

            <HStack display={{ base: "none", md: "flex" }}>
                <Button _hover={{ color: 'teal' }} variant='ghost'>
                    <HashLink  smooth to='#home'>
                        <Text fontSize="xl" >Home</Text>
                    </HashLink >
                </Button>
                <Button _hover={{ color: 'teal' }} variant='ghost'>
                    <HashLink smooth to='#about'>
                        <Text fontSize="xl" >About</Text>
                    </HashLink>
                </Button>
                <Button _hover={{ color: 'teal' }} variant='ghost'>
                    <HashLink smooth to='#skills'>
                        <Text fontSize="xl" >Skills</Text>
                    </HashLink>
                </Button>
                <Button _hover={{ color: 'teal' }} variant='ghost'>
                    <HashLink smooth to='#projects'>
                        <Text fontSize="xl" >Projects</Text>
                    </HashLink>
                </Button>
                <Button _hover={{ color: 'teal' }} variant='ghost'>
                    <HashLink smooth to='#contact'>
                        <Text fontSize="xl" >Contact</Text>
                    </HashLink>
                </Button>
            </HStack>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
    )
}

export default Navbar