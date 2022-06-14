import { Box, Code } from "@chakra-ui/react"

function About() {

    //getting current year
    const ex = new Date();

    //getting current month
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var month = months[ ex.getMonth() ];

  return (
    <>
        <Box textAlign='left' m='10% 13%'>
            <Code fontSize='3xl'>Hello, I'm Dorjee.</Code>
            <br/>
            <Code maxW='70%' mt='2%' fontSize='15px' >I love creating ideas and concept come to life with code. I'm a huge fan of reusability programs and functional code.
            <br/>
            As of <Code color='#DEB887' >{month} {ex.getFullYear()}</Code>,
            </Code>
        </Box>
    </>
  )
}

export default About