import { HStack, Box, Icon } from "@chakra-ui/react";
import { AiFillGithub } from 'react-icons/ai'

    function NavBar() {
        return (
        <>
            <HStack justify='center' spacing='10' w='100%' mt='4' mb='4'>
                <Box fontSize='lg'>Projects</Box>
                <Box fontSize='lg'>Resume</Box>
                <Box fontSize='lg'>Contact</Box>
                <HStack spacing='50'>
                    <Icon as={AiFillGithub} w={30} h={30}/>
                </HStack>

            </HStack>
        </>
        )
    }

export default NavBar;