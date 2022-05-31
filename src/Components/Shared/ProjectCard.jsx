import { Box, Code } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import GithubBTN from "./GithubBTN"


function ProjectCard({ header, description }) {
  return (
    <>
      <Box textAlign='left' justifyContent='center' fontWeight='thin' m='3% 10%'>
        <h1 ><Code fontSize='2xl' fontWeight='thin'>{header}</Code><GithubBTN/></h1>
        <p>{description}</p>
      </Box>
    </>
    
  )
}

ProjectCard.propTypes = {
  header: PropTypes.string.isRequired 
}

export default ProjectCard