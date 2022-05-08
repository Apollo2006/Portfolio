import React from 'react'
import { SimpleGrid, Box, Code, Icon, Button, Link} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'

function Home() {
  const syntax = `<p>`;
  const syntac = `</p>`;

  return (
    <SimpleGrid columns={1} bg='beige' >
      <Box textAlign='center' fontFamily='serif' color='Black' letterSpacing='wider'  mt='5%'fontSize='6xl'>Dorjee Lama</Box>
      <Box textAlign='center'>
        <Code>{syntax}Front-End Web Developer{syntac}</Code>
      </Box>
      <Box textAlign='center' mb='10%'>
        <Button variant='link' mt='2%' fontSize='small'>
        <Link href='https://github.com/Apollo2006'>
          View the Sites Code
        </Link>
        <Icon as={AiFillGithub} w={7} h={7} padding='3%'/>
        </Button>
      </Box>
      
    </SimpleGrid>

  )
}

export default Home