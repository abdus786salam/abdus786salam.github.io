import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Flex, Spacer, Link, HStack, Button, Text } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import "./Navbar.css"
import DrawerMenu from './DrowerMenu';


const Navbar = () => {
    // const [isMobile, setMobile] = React.useState(false)
    return (
        <Flex
            py={8}
            px={{base:5,md:100}}
            position='sticky'
            boxShadow='lg'
            alignItems='center'
            gap='5'>
            <Button _hover={{ color: 'teal' }} variant='ghost'>
                <Link as={ReactLink} to='/'>
                    <Text fontSize="2xl" >Abdus Salam</Text>
                </Link>
            </Button>
            <Spacer />
                    <DrawerMenu  />  
                    <HStack display={{ base: "none", md: "flex" }}>
                    <Button _hover={{ color: 'teal' }} variant='ghost'>
                        <Link as={ReactLink} to='/'>
                            <Text fontSize="xl" >Home</Text>
                        </Link>
                    </Button>
                    <Button _hover={{ color: 'teal' }} variant='ghost'>
                        <Link as={ReactLink} to='/about'>
                            <Text fontSize="xl" >About</Text>
                        </Link>
                    </Button>
                    <Button _hover={{ color: 'teal' }} variant='ghost'>
                        <Link as={ReactLink} to='/skills'>
                            <Text fontSize="xl" >Skills</Text>
                        </Link>
                    </Button>
                    <Button _hover={{ color: 'teal' }} variant='ghost'>
                        <Link as={ReactLink} to='/projects'>
                            <Text fontSize="xl" >Projects</Text>
                        </Link>
                    </Button>
                    <Button _hover={{ color: 'teal' }} variant='ghost'>
                        <Link as={ReactLink} to='/contact'>
                            <Text fontSize="xl" >Contact</Text>
                        </Link>
                    </Button>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </HStack> 
            


        </Flex>
    )
}

export default Navbar