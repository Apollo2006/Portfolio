import React from 'react'
import { SimpleGrid, Box, Code } from '@chakra-ui/react'
import GithubBTN from '../Components/Shared/GithubBTN';

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
        <GithubBTN text='View Sites Code'/>
      </Box>
      
    </SimpleGrid>

  )
}

export default Home