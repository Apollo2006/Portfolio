import React from 'react'
import { Box, Code, Link } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import GithubBTN from "./GithubBTN"


function ProjectCard({ header, description, id, link }) {
  return (
    <>
      <Link href={link}>
        <Box key={id} textAlign='left' justifyContent='center'  fontWeight='thin' m='3% 10%'>
        <h1 ><Code fontSize='2xl' fontWeight='thin'>{header}</Code><GithubBTN/></h1>
        <p>{description}</p>
      </Box>
      </Link>
    </>
    
  )
}

ProjectCard.propTypes = {
  header: PropTypes.string.isRequired 
}

export default ProjectCard