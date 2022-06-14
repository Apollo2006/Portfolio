import { Box, Code, Image } from "@chakra-ui/react"


function About() {

    //getting current year
    const ex = new Date();

    //getting current month
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var month = months[ ex.getMonth() ];

  return (
    <>
        <Box textAlign='left' m='10% 0% 10% 10%'>
            <Image borderRadius='50%' float='right' src='https://bit.ly/3Qlt3we' w='25%' maxW='320px' m='0 5% 0 0' alt='Cat pfp <3' />
            <Code fontSize='3xl'>Hello, I'm Dorjee.
            </Code>
            <br/>
            <Code w='65%' mt='2%' fontSize='15px' >I love creating ideas and concept come to life with code. I'm a huge fan of reusability programs and functional code.
            <br/>
            As of <Code color='#DEB887' >{month} {ex.getFullYear()}</Code>, I am a 15 year old aspiring to be a Full-Stack Web Developer. I'm currently really interested in the idea of Web automation and designing mock ups.
            </Code>
        </Box>
    </>
  )
}

export default About